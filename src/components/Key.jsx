import React from "react";

function Key({ text, className, operation }) {
  return (
    <div
      className={className}
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
