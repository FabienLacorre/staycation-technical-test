import clsx from "clsx";
import "./Input.scss";

export interface InputProps {
  className?: string;
}

export const Input = ({ className: classNameProps }: InputProps) => {
  const className = clsx("ds-c-input", classNameProps);
  return <input className={className} type="text" />;
};
