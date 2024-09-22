import { Typography } from "../DesignSystem/Atoms/Typography";
import { formatRatingAndReview } from "../Utils/formatRatingAndReview";
import { PriceDisplayer } from "./PriceDisplayer";

import "./HotelDescription.scss";
import { formatReview } from "../Utils/formatReview";
import moment from "moment";

export interface HotelDescriptionProps {
  title: string;
  subTitle: string;
  price: number;
  oldPrice: number;
  meanRating: number;
  numberOfReviews: number;
  priceContainerClassName?: string;
  starsNumber: number;
  lastBookableDate: Date;
  isBookable: boolean;
}

export const HotelDescription = ({
  title,
  subTitle,
  price,
  oldPrice,
  priceContainerClassName,
  meanRating,
  numberOfReviews,
  starsNumber,
  isBookable,
  lastBookableDate,
}: HotelDescriptionProps) => {
  const starsString = "*".repeat(starsNumber);

  return (
    <>
      <div className="staycation-c-hotel-description__title-and-rating-container">
        <Typography
          color={isBookable === false ? "secondary" : "primary"}
          isBold
        >
          <>
            {title} {starsString}
          </>
        </Typography>
        <Typography
          size="S"
          className="staycation-c-hotel-desction__rating-typography"
        >
          {formatRatingAndReview(formatReview(meanRating), numberOfReviews)}
        </Typography>
      </div>
      <Typography size="S">{subTitle}</Typography>

      <div className={"staycation-c--price-and-date-container"}>
        <PriceDisplayer
          className={priceContainerClassName}
          price={price}
          oldPrice={oldPrice}
          isBookable={isBookable}
        />
        {isBookable === false ? (
          <Typography size="S">
            {`Last availability date: ${moment(lastBookableDate).format(
              "DD/MM/YYYY"
            )}`}
          </Typography>
        ) : null}
      </div>
    </>
  );
};
