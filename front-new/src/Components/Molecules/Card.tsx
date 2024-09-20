import { Picture } from "../Atoms/Picture";
import { Typography } from "../Atoms/Typography";
import "./Card.scss";
import clsx from "clsx";

export interface CardProps {
  className?: string;
  imageUlr: string;
  title: string;
  subTitle: string;
  price: string;
  oldPrice: string;
  reduction: string;
}

export const Card = ({
  className: classNameProps,
  imageUlr,
  title,
  subTitle,
  price,
  oldPrice,
  reduction,
}: CardProps): JSX.Element => {
  const className = clsx("ds-c-card");
  return (
    <div className={className}>
      <Picture url={imageUlr} />
      <Typography isBold>{title}</Typography>
      <Typography size="S">{subTitle}</Typography>
      <div style={{ display: "flex" }}>
        <Typography isBold>{price}</Typography>
        <Typography size="S">{oldPrice}</Typography>
        <Typography size="S">{reduction}</Typography>
      </div>
    </div>
  );
};
