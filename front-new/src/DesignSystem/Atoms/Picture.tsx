import clsx from "clsx";
import "./Picture.scss";

export interface PictureProps {
  path?: string;
  url?: string;
  className?: string;
}

export const Picture = ({
  path,
  url,
  className: classNameProps,
}: PictureProps) => {
  const className = clsx("ds-c-picture", classNameProps);

  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "url(https://staycation.twic.pics/pictures/production/bc8952455c6bbfdbec623c56145421ed.blob?twic=v1/cover=1000x512)",
      }}
    />
  );
};
