import { Picture } from "../Atoms/Picture";
import "./Card.scss";
import clsx from "clsx";

export interface CardProps {
  className?: string;
  pictureClassName?: string;
  imageUlr: string;
  children: JSX.Element;
}

export const Card = ({
  className: classNameProps,
  pictureClassName: pictureClassNameProps,
  imageUlr,
  children,
}: CardProps): JSX.Element => {
  const className = clsx("ds-c-card", classNameProps);
  const pictureClassName = clsx("ds-c-card__picture", pictureClassNameProps);

  return (
    <div className={className}>
      <Picture className={pictureClassName} url={imageUlr} />
      {children}
    </div>
  );
};
