// Libs
import React from "react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { SepiaThemeContainer, ThemeContainer } from "./ThemeContainer";

function decoratorBuilder(
  ThemeContainerComponent: React.FunctionComponent<any>
) {
  return function ThemeDecorator(
    Story: React.FunctionComponent,
    { globals: {} }: { globals: {} }
  ) {
    return (
      <ThemeContainerComponent x>
        <Story />
      </ThemeContainerComponent>
    );
  };
}

export const ThemeDecorator = decoratorBuilder(ThemeContainer);

export const SepiaThemeDecorator = decoratorBuilder(SepiaThemeContainer);

function PathDisplay() {
  const location = useLocation();

  return (
    <div
      style={{ padding: "10px" }}
    >{`Currently on: ${location.pathname}${location.search}`}</div>
  );
}

export function RouterDecorator(Story: React.FunctionComponent) {
  return (
    <MemoryRouter initialEntries={["/home"]}>
      <PathDisplay />
      <Story />
    </MemoryRouter>
  );
}
