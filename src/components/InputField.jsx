function InputField({ selectedTheme, fieldValue }) {
  return (
    <div
      className={`inputField ${
        selectedTheme === 1
          ? "firstThemeInputField"
          : selectedTheme === 2
          ? "secondThemeInputField"
          : "thirdThemeInputField"
      } d-flex justify-content-start align-items-center`}
    >
      <p className={`result`}>{fieldValue}</p>
    </div>
  );
}

export default InputField;
