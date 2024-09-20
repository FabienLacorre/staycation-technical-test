import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Stores/store";
import { useEffect } from "react";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import { useListSelector } from "../Stores/selectors";
import { GridItem } from "../DesignSystem/Atoms/GridItem";
import { Card } from "../DesignSystem/Molecules/Card";
import { HotelDescription } from "../Components/HotelDescription";
import { Hotel } from "../Stores/HotelSlice";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const hotelListMetaData = useSelector(
    (state: RootState) => state.hotel.metaData
  );
  const hotelList = useListSelector<Hotel>("hotel");

  useEffect(() => {
    dispatch(getAllHotelThunk());
  }, []);

  console.log("hotels", hotelList);

  return (
    <Content>
      <Grid>
        {hotelList.map((hotel) => {
          return (
            <GridItem>
              <Card imageUlr={hotel.picture_id}>
                <HotelDescription
                  key={`${hotel.id}-${hotel.name}`}
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
    </Content>
  );
};
