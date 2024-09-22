import clsx from "clsx";
import "./PriceDisplayer.scss";
import { formatPercent } from "../Utils/formatPercent";
import { computePercent } from "../Utils/computePercent";
import { formatPrice } from "../Utils/formatPrice";
import { Typography } from "../DesignSystem/Atoms/Typography";
import { Chip } from "../DesignSystem/Atoms/Chip";

export interface PriceDisplayerProps {
  className?: string;
  price: number;
  oldPrice: number;
  isBookable: boolean;
}
export const PriceDisplayer = ({
  price,
  oldPrice,
  className: classNameProps,
  isBookable = false,
}: PriceDisplayerProps) => {
  const className = clsx("staycation-c-price-displayer", classNameProps);
  const reduction = formatPercent(computePercent(oldPrice, price));

  return (
    <div className={className}>
      <Typography color={isBookable === false ? "secondary" : "primary"} isBold>
        {formatPrice(price)}
      </Typography>
      <Typography isBarred size="S" color="secondary">
        {formatPrice(oldPrice)}
      </Typography>
      <Chip>
        <Typography size="XS" isBold>
          {reduction}
        </Typography>
      </Chip>
    </div>
  );
};
