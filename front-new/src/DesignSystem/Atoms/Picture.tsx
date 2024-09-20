import clsx from "clsx";
import "./Picture.scss";

export interface PictureProps {
  url?: string;
  className?: string;
}

export const Picture = ({ url, className: classNameProps }: PictureProps) => {
  const className = clsx("ds-c-picture", classNameProps);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  );
};
