import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Stores/store";
import { useEffect } from "react";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import { useSelectorList, useSelectorListMetaData } from "../Stores/selectors";
import { GridItem } from "../DesignSystem/Atoms/GridItem";
import { Card } from "../DesignSystem/Molecules/Card";
import { HotelDescription } from "../Components/HotelDescription";
import { Hotel } from "../Stores/HotelSlice";
import { Loader } from "../DesignSystem/Atoms/Laoder";
import { ApiStatus } from "../Types/ApiStatus";
import { Typography } from "../DesignSystem/Atoms/Typography";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const hotelList = useSelectorList<Hotel>("hotel");
  const hotelListMetaData = useSelectorListMetaData<Hotel>("hotel");

  useEffect(() => {
    dispatch(getAllHotelThunk());
  }, []);

  if (hotelListMetaData.apiStatus === ApiStatus.LOADING) {
  }

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
