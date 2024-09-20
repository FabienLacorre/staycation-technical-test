import clsx from "clsx";

export const Content = ({
  children,
  className: classNameProps,
}: {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}): JSX.Element => {
  const className = clsx("content", "full-height", classNameProps);
  return <div className={className}>{children}</div>;
};
