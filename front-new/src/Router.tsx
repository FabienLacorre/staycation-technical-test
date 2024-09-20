import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Page } from "./Components/Atoms/Page";
import { Dashboard } from "./Pages/Dashboard";
import { forOwn } from "lodash";

export enum PageKeyEnum {
  HOME = "HOME",
  TEST_PAGE = "TEST_PAGE",
}

export const pageConfiguration = {
  [PageKeyEnum.HOME]: {
    keyEnum: PageKeyEnum.HOME,
    path: "/",
    label: "Acceuil",
    Content: <Dashboard />,
    withNavbar: true,
  },
};

const pageRouteList: RouteObject[] = [];

forOwn(pageConfiguration, (value, key) => {
  pageRouteList.push({
    path: value.path,
    element: <Page withNavBar={value.withNavbar} Content={value.Content} />,
  });
});

export const router = createBrowserRouter(pageRouteList);
