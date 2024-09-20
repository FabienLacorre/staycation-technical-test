import clsx from "clsx";
import "./Chip.scss";

export interface ChipProps {
  className?: string;
  children: JSX.Element | string;
}

export const Chip = ({ className: classNameProps, children }: ChipProps) => {
  const className = clsx("ds-c-chip", classNameProps);
  return <div className={className}>{children}</div>;
};
