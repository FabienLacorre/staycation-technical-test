import clsx from "clsx";
import "./Input.scss";

export interface InputProps {
  className?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className: classNameProps,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  const className = clsx("ds-c-input", classNameProps);

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
