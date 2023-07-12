import Key from "./Key";

function KeysGrid({
  selectedTheme,
  handleNumberClicked,
  handleDeleteClicked,
  handleResetClicked,
  handleEqualClicked,
}) {
  return (
    <div>
      <div className="keys">
        <Key
          text={7}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={8}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={9}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`DEL`}
          className={`key deleteBtn ${
            selectedTheme === 1
              ? "firstThemeDeleteBtn"
              : selectedTheme === 2
              ? "secondThemeDeleteBtn"
              : "thirdThemeDeleteBtn"
          }`}
          operation={handleDeleteClicked}
        />
        <Key
          text={4}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={5}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={6}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`+`}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={1}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={2}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={3}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`-`}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`.`}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={0}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`/`}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
        <Key
          text={`*`}
          className={`key`}
          selectedTheme={selectedTheme}
          operation={handleNumberClicked}
        />
      </div>
      <div className="d-flex">
        <Key
          text={`RESET`}
          className={`resetBtn half ${
            selectedTheme === 1
              ? "firstThemeResetBtn"
              : selectedTheme === 2
              ? "secondThemeResetBtn"
              : "thirdThemeResetBtn"
          }`}
          operation={handleResetClicked}
        />
        <Key
          text={`=`}
          className={`equalBtn half ${
            selectedTheme === 1
              ? "firstThemeEqualBtn"
              : selectedTheme === 2
              ? "secondThemeEqualBtn"
              : "thirdThemeEqualBtn"
          }`}
          operation={handleEqualClicked}
        />
      </div>
    </div>
  );
}

export default KeysGrid;
