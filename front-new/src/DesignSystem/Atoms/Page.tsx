import Header from "../Molecules/Header";
import { Layout } from "./Layout";

export const Page = ({
  Content,
  withNavBar,
}: {
  Content: JSX.Element;
  withNavBar: boolean;
}) => {
  return (
    <Layout>
      <>
        {withNavBar && <Header />}
        {Content}
      </>
    </Layout>
  );
};
