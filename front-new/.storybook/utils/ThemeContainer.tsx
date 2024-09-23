// Libs
import React from "react";

// Components

function themeContainerBuilder(
  lightColor: string,
  darkColor: string,
  negMargin: boolean
) {
  return function ThemeContainer({ theme = "light", children }: any) {
    return (
      <div
        style={{
          backgroundColor: theme === "light" ? lightColor : darkColor,
          padding: "30px",
          borderRadius: "10px",
          margin: negMargin ? "-30px" : undefined,
        }}
      >
        {children}
      </div>
    );
  };
}

export const ThemeContainer = themeContainerBuilder(
  "transparent",
  "#333",
  false
);

export const SepiaThemeContainer = themeContainerBuilder(
  "#f5f5f5",
  "transparent",
  true
);
