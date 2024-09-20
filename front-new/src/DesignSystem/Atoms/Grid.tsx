import clsx from "clsx";

import "./Grid.scss";

export interface GridProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Grid = ({
  children,
  className: classNameProps,
}: GridProps): JSX.Element => {
  const className = clsx("ds-c-grid", classNameProps);
  return <div className={className}>{children}</div>;
};
