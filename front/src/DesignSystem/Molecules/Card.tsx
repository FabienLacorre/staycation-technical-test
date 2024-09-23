import { Picture } from "../Atoms/Picture";
import "./Card.scss";
import clsx from "clsx";

export interface CardProps {
  className?: string;
  pictureClassName?: string;
  pictureContainerClassName?: string;
  imageUlr: string;
  children: JSX.Element;
  isDisabled?: boolean;
}

export const Card = ({
  className: classNameProps,
  pictureClassName: pictureClassNameProps,
  pictureContainerClassName: pictureContainerClassNameProps,
  imageUlr,
  children,
  isDisabled = false,
}: CardProps): JSX.Element => {
  const className = clsx(
    "ds-c-card",
    {
      "ds-c-card--disabled": isDisabled,
      "ds-c-card--enabled": !isDisabled,
    },
    classNameProps
  );
  const pictureClassName = clsx("ds-c-card__picture", pictureClassNameProps);
  const pictureContainerClassName = clsx(
    "ds-c-card--picture-container",
    pictureContainerClassNameProps
  );

  return (
    <div className={className}>
      <div className={pictureContainerClassName}>
        <Picture className={pictureClassName} url={imageUlr} />
      </div>

      {children}
    </div>
  );
};
