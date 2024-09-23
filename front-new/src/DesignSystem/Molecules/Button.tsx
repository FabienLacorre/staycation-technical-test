import clsx from "clsx";
import "./Button.scss";
import { Typography } from "../Atoms/Typography";

export interface ButtonProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | number;
  onClick: () => void;
}

export const Button = ({
  className: classNameProps,
  children,
  onClick,
}: ButtonProps) => {
  const className = clsx("ds-c-button", classNameProps);
  return (
    <button onClick={onClick} className={className}>
      <Typography size="S" isBold>
        {children}
      </Typography>
    </button>
  );
};
