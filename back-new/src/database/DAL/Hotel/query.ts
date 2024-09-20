import { AppDataSource } from "../../data-source";
import { Hotels } from "../../entities/Hotels";

export const DAL_getAllHotels = async () => {
  const HotelRepository = AppDataSource.getRepository(Hotels)
    .createQueryBuilder("hotel")
    .select([
      "hotel.id as id",
      "hotel.name as name",
      "hotel.stars as stars",
      "hotel.preview as preview",
      "hotel.picture_id as picture_id",
      "AVG(reviews.score) as review_score",
      "COUNT(reviews.id) as review_count",
    ])
    .leftJoin("reviews", "reviews", "reviews.hotel_id = hotel.id")
    .groupBy("hotel.id")
    .addGroupBy("hotel.name")
    .orderBy("hotel.id", "ASC");

  console.log("DAL_getAllHotels: HotelRepository: ", HotelRepository.getSql());
  return HotelRepository.getRawMany();
};
