import { NO_VALUES } from "./formatReview";

export const formatRatingAndReview = (
  meanRatin: number | string,
  numberOfReview: number
) => {
  return `${meanRatin} (${numberOfReview > 0 ? numberOfReview : NO_VALUES})`;
};
