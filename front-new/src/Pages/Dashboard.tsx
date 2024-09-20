import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Stores/store";
import { useEffect } from "react";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import { GridItem } from "../DesignSystem/Atoms/GridItem";
import { Card } from "../DesignSystem/Molecules/Card";
import { HotelDescription } from "../Components/HotelDescription";
import { Hotel } from "../Stores/slices/HotelSlice";
import { Loader } from "../DesignSystem/Atoms/Laoder";
import { ApiStatus } from "../Types/ApiStatus";
import { Typography } from "../DesignSystem/Atoms/Typography";
import {
  useSelectorList,
  useSelectorListMetaData,
} from "../Stores/utils/selectors";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const hotelList = useSelectorList<Hotel>("hotel");
  const hotelListMetaData = useSelectorListMetaData<Hotel>("hotel");

  useEffect(() => {
    dispatch(getAllHotelThunk());
  }, []);

  return (
    <Content>
      <>
        {hotelListMetaData.apiStatus === ApiStatus.FAILED ? (
          <Typography>
            An error occured during the loading... please try later
          </Typography>
        ) : null}
        {hotelListMetaData.apiStatus === ApiStatus.LOADING ? <Loader /> : null}
        {hotelListMetaData.apiStatus === ApiStatus.SUCCEEDED ? (
          <Grid>
            {hotelList.map((hotel) => {
              return (
                <GridItem key={`${hotel.id}-${hotel.name}`}>
                  <Card imageUlr={hotel.picture_id}>
                    <HotelDescription
                      title={hotel.name}
                      subTitle={hotel.preview}
                      price={123}
                      oldPrice={600}
                      meanRating={hotel.review_score}
                      numberOfReviews={hotel.review_count}
                      starsNumber={hotel.stars}
                    />
                  </Card>
                </GridItem>
              );
            })}
          </Grid>
        ) : null}
      </>
    </Content>
  );
};


// select * from rooms r 

// select * from sale_dates sd where id = 20

// select * from openings o 


// SELECT DISTINCT ON (hotels."name") 
//     hotels."name", 
//     openings."date", 
//     rooms."name", 
//     openings."discount_price",
//     openings."price",
//     openings.stock,
//     rooms.id as room_id
// FROM "hotels"
// LEFT JOIN "rooms" ON "rooms"."hotel_id" = hotels."id"
// LEFT JOIN "openings" ON "openings"."room_id" = "rooms"."id"
// ORDER BY hotels."name", openings."discount_price" ASC, openings."date" DESC;

// select * from openings 
// LEFT JOIN "rooms" ON "rooms"."id" = openings."room_id"
// left join hotels on hotels.id = rooms.hotel_id
// where hotel_id = 10

// where room_id  = 49

// select * from rooms 
// inner join hotels on hotels.id = rooms.hotel_id 
// where rooms.id = 49

