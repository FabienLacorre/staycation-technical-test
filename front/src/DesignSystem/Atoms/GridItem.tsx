import clsx from "clsx";

import "./Grid.scss";

export interface GridItemProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const GridItem = ({
  children,
  className: classNameProps,
}: GridItemProps): JSX.Element => {
  const className = clsx("ds-c-grid-item", classNameProps);
  return <div className={className}>{children}</div>;
};
