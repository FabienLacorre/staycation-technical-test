import clsx from "clsx";
import "./Typography.scss";

export interface TypographyProps {
  children: JSX.Element | JSX.Element[] | string | number;
  className?: string;
  isBold?: boolean;
  isBarred?: boolean;
  size?: "XS" | "S" | "M" | "L";
}

export const Typography = ({
  children,
  isBold = false,
  size = "M",
  isBarred = false,
  className: classNameProps,
}: TypographyProps): JSX.Element => {
  const className = clsx(
    "ds-c-typography",
    {
      "ds-c-typography--bold": isBold,
      "ds-c-typography--barred": isBarred,
      "ds-c-typography--XS": size === "XS",
      "ds-c-typography--S": size === "S",
      "ds-c-typography--M": size === "M",
      "ds-c-typography--L": size === "L",
    },
    classNameProps
  );

  return <span className={className}>{children}</span>;
};
