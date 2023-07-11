import { useState, useEffect } from "react";
import Key from "./components/Key";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [fieldValue, setFieldValue] = useState("");
  const [animation, setAnimation] = useState("");

  const handleThemeChanged = (num) => {
    setSelectedTheme(num);
  };

  const handleNumberClicked = (num) => {
    setFieldValue(`${fieldValue}${num}`);
  };
  const handleDeleteClicked = () => {
    setFieldValue(fieldValue.slice(0, -1));
  };
  const handleResetClicked = () => {
    setFieldValue("");
  };
  const handleEqualClicked = () => {
    try {
      setFieldValue(eval(fieldValue).toString());
    } catch (error) {
      setFieldValue("Syntax Error!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation("appAnimation");
    }, 50);

    // return () => {
    setAnimation("");
    // };
  }, [selectedTheme]);

  return (
    <div
      className={`App ${animation} ${
        selectedTheme === 1
          ? "firstThemeApp"
          : selectedTheme === 2
          ? "secondThemeApp"
          : "thirdThemeApp"
      } d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="calculator d-flex flex-column">
        <div className="title d-flex flex-row justify-content-between align-items-center">
          <h2>calc</h2>
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
        </div>

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
        <div
          className={`inputsSection ${
            selectedTheme === 1
              ? "firstThemeInputsSection"
              : selectedTheme === 2
              ? "secondThemeInputsSection"
              : "thirdThemeInputsSection"
          }`}
        >
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
          <div className="lastRow">
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
      </div>
    </div>
  );
}

export default App;
