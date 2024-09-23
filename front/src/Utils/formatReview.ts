export const TRUNCATE_DECIMAL = 1;
export const NO_VALUES = "-";

export const formatReview = (score: number) => {
  return score ? Number.parseFloat(score.toFixed(TRUNCATE_DECIMAL)) : NO_VALUES;
};
