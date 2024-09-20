import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { store } from "./Stores/store";
import { Provider } from "react-redux";

import "./styles/index.scss";
import { router } from "./Router";

// PUT IN ENV FILE AFTER

export const API_URL = "http://localhost:3000";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
