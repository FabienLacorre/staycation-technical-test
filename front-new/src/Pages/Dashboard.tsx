import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Stores/store";
import { useEffect } from "react";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import {
  useListSelector,
  useSelectorGlobalMetaData,
} from "../Stores/selectors";
import { GridItem } from "../DesignSystem/Atoms/GridItem";
import { Card } from "../DesignSystem/Molecules/Card";
import { HotelDescription } from "../Components/HotelDescription";
import { Hotel } from "../Stores/HotelSlice";
import { Loader } from "../DesignSystem/Atoms/Laoder";
import { ApiStatus } from "../Types/ApiStatus";
import { Typography } from "../DesignSystem/Atoms/Typography";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const hotelListMetaData = useSelectorGlobalMetaData<Hotel>("hotel");
  const status = hotelListMetaData.apiStatus;
  const hotelList = useListSelector<Hotel>("hotel");

  console.log(hotelListMetaData);

  useEffect(() => {
    dispatch(getAllHotelThunk());
  }, []);

  if (status === ApiStatus.LOADING) {
  }

  return (
    <Content>
      <>
        {status === ApiStatus.FAILED ? (
          <Typography>
            An error occured during the loading... please try later
          </Typography>
        ) : null}
        {status === ApiStatus.LOADING ? <Loader /> : null}
        {status === ApiStatus.SUCCEEDED ? (
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
                      meanRating={4.5}
                      numberOfReviews={123}
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
