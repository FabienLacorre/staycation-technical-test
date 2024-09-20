import { Content } from "../DesignSystem/Atoms/Content";
import { Card } from "../DesignSystem/Molecules/Card";
import { HotelDescription } from "../Components/HotelDescription";
import { Grid } from "../DesignSystem/Atoms/Grid";
import { GridItem } from "../DesignSystem/Atoms/GridItem";

export const Dashboard = (): JSX.Element => {
  const tmp = [];
  for (let i = 0; i < 25; i++) {
    tmp.push(i);
  }

  return (
    <Content>
      <Grid>
        {tmp.map((i) => {
          return (
            <GridItem>
              <Card imageUlr={"https://picsum.photos/200/300"}>
                <HotelDescription
                  title={"test hotel title"}
                  subTitle={"test hotel subtitle"}
                  price={123}
                  oldPrice={600}
                  meanRating={4.5}
                  numberOfReviews={123}
                  starsNumber={4}
                />
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Content>
  );
};
