import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useAppDispatch } from "../Stores/store";
import { useEffect } from "react";
import { getAllOpenedHotelThunkByPeriodId } from "../Thunks/HotelThunks";
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

  console.log("hotelList", hotelList);

  useEffect(() => {
    dispatch(getAllOpenedHotelThunkByPeriodId({ periodId: 90 }));
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
          <>
            <Grid>
              {hotelList.map((hotel) => {
                return (
                  <GridItem key={`${hotel.id}-${hotel.name}`}>
                    <Card
                      imageUlr={hotel.picture_id}
                      isDisabled={hotel.is_bookable_on_date === false}
                    >
                      <HotelDescription
                        title={hotel.name}
                        subTitle={hotel.preview}
                        price={hotel.discount_price}
                        oldPrice={hotel.price}
                        meanRating={hotel.review_score}
                        numberOfReviews={hotel.review_count}
                        starsNumber={hotel.stars}
                        lastBookableDate={hotel.last_bookable_date}
                        isBookable={hotel.is_bookable_on_date}
                      />
                    </Card>
                  </GridItem>
                );
              })}
            </Grid>
          </>
        ) : null}
      </>
    </Content>
  );
};
