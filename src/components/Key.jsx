import React from "react";

function Key({ text, className, operation, selectedTheme }) {
  return (
    <div
      className={`${className}  ${
        selectedTheme
          ? selectedTheme === 1
            ? "firstThemeKeys"
            : selectedTheme === 2
            ? "secondThemeKeys"
            : "thirdThemeKeys"
          : ""
      }`}
      onClick={() => {
        if (text === "x") {
          operation(`*`);
        } else {
          operation(text);
        }
      }}
    >
      <span style={{ paddingTop: "0.2rem" }}>{text}</span>
    </div>
  );
}

export default Key;
