import { Typography } from "../DesignSystem/Atoms/Typography";
import { formatRatingAndReview } from "../Utils/formatRatingAndReview";
import { PriceDisplayer } from "./PriceDisplayer";

import "./HotelDescription.scss";
import { formatReview } from "../Utils/formatReview";

export interface HotelDescriptionProps {
  title: string;
  subTitle: string;
  price: number;
  oldPrice: number;
  meanRating: number;
  numberOfReviews: number;
  priceContainerClassName?: string;
  starsNumber: number;
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
}: HotelDescriptionProps) => {
  const starsString = "*".repeat(starsNumber);

  return (
    <>
      <div className="staycation-c-hotel-description__title-and-rating-container">
        <Typography isBold>
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

      <PriceDisplayer
        className={priceContainerClassName}
        price={price}
        oldPrice={oldPrice}
      />
    </>
  );
};
