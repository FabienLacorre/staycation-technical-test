import clsx from "clsx";
import { Content } from "../Components/Atoms/Content";

export const Dashboard = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");

  return (
    <Content className={contentClassName}>
      <div style={{ height: 4000 }}>TEST ICI CODE</div>
    </Content>
  );
};
