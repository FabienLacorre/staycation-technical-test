import { AppDataSource } from "../../data-source";

export const DAL_getOpenedHotelListByPeriodId = async (
  periodId: number[]
) => {
  // Better solution :
  // A materialized view that refreshes every hour might be a better solution to avoid making this rather complex request each time a page refreshes.
  // it is possible to write this request in another more readable way (with with or via typeorm)

  const rawData = await AppDataSource.manager.query(
    `
        SELECT DISTINCT ON (hotels."name")
        hotels.id as id,
        hotels."name", 
        hotels.stars,
        hotels.picture_id,
        available_openings."date", 
        available_openings."discount_price",
        available_openings."price",
        available_openings.available_stock, 
        available_openings.date as last_bookable_date,    
        rooms.id AS room_id,

        -- Ajout du champ booléen pour connaitre si la date est bookable sur la derniere perdio de vente
        CASE 
            WHEN available_openings."date" in (
              SELECT unnest(bookable_days) 
                FROM sale_dates 
                WHERE id = ${periodId} -- TODO: prendre ici une liste de date en params de la fonction 
            ) THEN true
            ELSE false
        END AS is_bookable_on_date,

        -- Ajout de la moyenne des scores
        COALESCE(hotel_reviews.avg_score, 0) AS review_score, 
        -- Ajout du nombre de reviews
        COALESCE(hotel_reviews.review_count, 0) AS review_count 
        
        FROM (
            -- Liste de toutes les opening de chambre par date avec leur stock réel
            SELECT o.*, COALESCE(o.stock - bc.bookings_count, o.stock) AS available_stock
            FROM openings o
            LEFT JOIN (


                -- Booking count par chambre par date
                SELECT 
                    room_id, 
                    bookings.date,
                    COUNT(*) AS bookings_count
                FROM bookings
                GROUP BY room_id, bookings.date 
                ORDER BY room_id


            ) bc ON o.room_id = bc.room_id AND o.date = bc.date
            ORDER BY room_id, date
        ) AS available_openings
        LEFT JOIN rooms ON rooms.id = available_openings.room_id 
        LEFT JOIN hotels ON rooms.hotel_id = hotels.id
        LEFT JOIN (


            -- Sous-requête pour calculer la moyenne des scores et le nombre de reviews
            SELECT 
                hotel_id, 
                AVG(score) AS avg_score, 
                COUNT(*) AS review_count
            FROM reviews
            GROUP BY hotel_id


        ) AS hotel_reviews ON hotel_reviews.hotel_id = hotels.id
        WHERE available_openings.available_stock > 0
          AND available_openings."date" IN (


              SELECT unnest(bookable_days) 
              FROM sale_dates 


          )
        ORDER BY hotels."name", available_openings."discount_price" ASC, available_openings."date" DESC;
    `
  );

  return rawData;
};
