import clsx from "clsx";
import "./Button.scss";
import { Typography } from "../Atoms/Typography";

export interface ButtonProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | number;
}

export const Button = ({
  className: classNameProps,
  children,
}: ButtonProps) => {
  const className = clsx("ds-c-button", classNameProps);
  return (
    <button className={className}>
      <Typography size="S" isBold>{children}</Typography>
    </button>
  );
};
