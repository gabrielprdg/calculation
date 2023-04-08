import { useState } from "react";
import styles from './styles.module.scss'

export default function Calculator() {
  const [value, setValue] = useState("");

  const handleButtonClick = (e:any) => {
    setValue(value + e.target.value);
  };

  const calculateResult = () => {
    setValue(eval(value));
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <input type="text" value={value} />
        <br />
        <button value="1" onClick={handleButtonClick}>
          1
        </button>
        <button value="2" onClick={handleButtonClick}>
          2
        </button>
        <button value="3" onClick={handleButtonClick}>
          3
        </button>
        <button value="+" onClick={handleButtonClick}>
          +
        </button>
        <br />
        <button value="4" onClick={handleButtonClick}>
          4
        </button>
        <button value="5" onClick={handleButtonClick}>
          5
        </button>
        <button value="6" onClick={handleButtonClick}>
          6
        </button>
        <button value="-" onClick={handleButtonClick}>
          -
        </button>
        <br />
        <button value="7" onClick={handleButtonClick}>
          7
        </button>
        <button value="8" onClick={handleButtonClick}>
          8
        </button>
        <button value="9" onClick={handleButtonClick}>
          9
        </button>
        <button value="*" onClick={handleButtonClick}>
          *
        </button>
        <br />
        <button value="." onClick={handleButtonClick}>
          .
        </button>
        <button value="0" onClick={handleButtonClick}>
          0
        </button>
        <button value="=" onClick={calculateResult}>
          =
        </button>
        <button value="/" onClick={handleButtonClick}>
          /
        </button>
        <br />
        <button className={styles.clear} onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
}