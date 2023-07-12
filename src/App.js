import { useState, useEffect } from "react";
import KeysGrid from "./components/KeysGrid";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";
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
    setAnimation("");
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
          <ThemeSelector
            selectedTheme={selectedTheme}
            handleThemeChanged={handleThemeChanged}
          />
        </div>

        <InputField selectedTheme={selectedTheme} fieldValue={fieldValue} />
        <div
          className={`inputsSection ${
            selectedTheme === 1
              ? "firstThemeInputsSection"
              : selectedTheme === 2
              ? "secondThemeInputsSection"
              : "thirdThemeInputsSection"
          }`}
        >
          <KeysGrid
            selectedTheme={selectedTheme}
            handleNumberClicked={handleNumberClicked}
            handleDeleteClicked={handleDeleteClicked}
            handleResetClicked={handleResetClicked}
            handleEqualClicked={handleEqualClicked}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
