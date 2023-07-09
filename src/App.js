import { useState, useEffect } from "react";
import Key from "./components/Key";

function App() {
  const [fieldValue, setFieldValue] = useState("");

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

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="calculator d-flex flex-column">
        <h2 className="align-self-start title">calc</h2>
        <div className="inputField d-flex justify-content-start align-items-center">
          <span className={`result`}>{fieldValue}</span>
        </div>
        <div className="inputsSection">
          <div className="keys">
            <Key text={7} className={`key`} operation={handleNumberClicked} />
            <Key text={8} className={`key`} operation={handleNumberClicked} />
            <Key text={9} className={`key`} operation={handleNumberClicked} />
            <Key
              text={`DEL`}
              className={`key deleteBtn`}
              operation={handleDeleteClicked}
            />
            <Key text={4} className={`key`} operation={handleNumberClicked} />
            <Key text={5} className={`key`} operation={handleNumberClicked} />
            <Key text={6} className={`key`} operation={handleNumberClicked} />
            <Key text={`+`} className={`key`} operation={handleNumberClicked} />
            <Key text={1} className={`key`} operation={handleNumberClicked} />
            <Key text={2} className={`key`} operation={handleNumberClicked} />
            <Key text={3} className={`key`} operation={handleNumberClicked} />
            <Key text={`-`} className={`key`} operation={handleNumberClicked} />
            <Key text={`.`} className={`key`} operation={handleNumberClicked} />
            <Key text={0} className={`key`} operation={handleNumberClicked} />
            <Key text={`/`} className={`key`} operation={handleNumberClicked} />
            <Key text={`*`} className={`key`} operation={handleNumberClicked} />
          </div>
          <div className="lastRow">
            <Key
              text={`RESET`}
              className={`resetBtn half`}
              operation={handleResetClicked}
            />
            <Key
              text={`=`}
              className={`equalBtn half`}
              operation={handleEqualClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
