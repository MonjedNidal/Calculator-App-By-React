function ThemeSelector({ handleThemeChanged, selectedTheme }) {
  return (
    <div className="d-flex flex-row themeSection">
      <h6>THEME</h6>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row justify-content-center">
          <p className="themeNumbers">1</p>
          <p className="themeNumbers">2</p>
          <p>3</p>
        </div>
        <div
          className={`themeSelector ${
            selectedTheme === 1
              ? "firstThemeThemeSelector"
              : selectedTheme === 2
              ? "secondThemeThemeSelector"
              : "thirdThemeThemeSelector"
          } d-flex align-items-center`}
        >
          <div
            onClick={() => {
              handleThemeChanged(1);
            }}
            className={`theme1 ${selectedTheme === 1 ? "" : "opacity-0"}`}
          ></div>
          <div
            onClick={() => {
              handleThemeChanged(2);
            }}
            className={`theme2 ${selectedTheme === 2 ? "" : "opacity-0"}`}
          ></div>
          <div
            onClick={() => {
              handleThemeChanged(3);
            }}
            className={`theme3 ${selectedTheme === 3 ? "" : "opacity-0"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSelector;
