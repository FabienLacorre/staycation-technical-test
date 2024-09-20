import clsx from "clsx";
import { Content } from "../Components/Atoms/Content";
import { Card } from "../Components/Molecules/Card";

export const Dashboard = (): JSX.Element => {
  return (
    <Content>
      <div className="grid-container">
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
        <div className="grid-item">
          <Card
            imageUlr={"https://picsum.photos/200/300"}
            title={"Hotel du rond point des champs elysées"}
            subTitle={"Petit dej + champagne + cocktail inclus"}
            price={"160€"}
            oldPrice={"100€"}
            reduction={"21%"}
          />
        </div>
      </div>
    </Content>
  );
};
