import clsx from "clsx";
import { Content } from "../Components/Atoms/Content";

export const Dashboard = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");

  return <Content className={contentClassName}>TEST ICI CODE</Content>;
};
