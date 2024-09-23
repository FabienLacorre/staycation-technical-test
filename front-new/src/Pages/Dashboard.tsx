import { Content } from "../DesignSystem/Atoms/Content";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { useAppDispatch } from "../Stores/store";
import { useEffect, useState } from "react";
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
import { Button } from "../DesignSystem/Molecules/Button";
import { Input } from "../DesignSystem/Molecules/Input";
import "./Dashboard.scss";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const hotelList = useSelectorList<Hotel>("hotel");
  const hotelListMetaData = useSelectorListMetaData<Hotel>("hotel");

  useEffect(() => {
    dispatch(getAllOpenedHotelThunkByPeriodId({ periodId: 90 }));
  }, []);

  const [inputValue, setInputValue] = useState(90);

  const handleChangeInpute = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value as any);
  };

  const handleButtonClick = () => {
    dispatch(getAllOpenedHotelThunkByPeriodId({ periodId: inputValue }));
  };

  return (
    <Content>
      <>
        {hotelListMetaData.apiStatus === ApiStatus.FAILED ? (
          <Typography>
            An error occured during the loading... please try later
          </Typography>
        ) : null}
        {hotelListMetaData.apiStatus === ApiStatus.LOADING ? <Loader /> : null}

        {/* // BONUS: input to load different sales id */}
        {hotelListMetaData.apiStatus === ApiStatus.SUCCEEDED ? (
          <div className="staycation-c-dashboard--input-and-button-container">
            <div>
              <Input
                type="number"
                value={inputValue}
                onChange={handleChangeInpute}
              />
            </div>
            <Button onClick={handleButtonClick}>Load with new sale id</Button>
          </div>
        ) : null}

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
