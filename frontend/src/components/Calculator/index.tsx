import React, { useState } from "react";
import styles from './styles.module.scss'
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export type CalculatorProps = {
  setHistoricData: (data: any) => void;
}

export default function Calculator({setHistoricData}: CalculatorProps) {
  const [value, setValue] = useState("");

  const handleButtonClick = (e:any) => {
    setValue(value + e.target.value);
  };

  async function calculateResult() {
    try {
      const calculation = {calc: value}
      const res = await api.post('calc', calculation)

      if(res.status === 200) {
        const calculations = await api.get('calculations')
        setValue(res.data);
        setHistoricData(calculations.data)
      } else if (res.status===500){

        toast.error('Erro no servidor!')
      }
    }catch(err) {
      toast.error(`${err}`);
    }
  }

  const clearInput = () => {
    setValue("");
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <input type="text" value={value} />
        <button value="(" onClick={handleButtonClick}>(</button>
        <button value=")" onClick={handleButtonClick}>)</button>
        <button value="/" onClick={handleButtonClick}>/</button>

        <button value="*" onClick={handleButtonClick}>*</button>
        <button value="7" onClick={handleButtonClick}>7</button>
        <button value="8" onClick={handleButtonClick}>8</button>
        <button value="9" onClick={handleButtonClick}>9</button>
        
        <button value="-" onClick={handleButtonClick}>-</button>
        <button value="4" onClick={handleButtonClick}>4</button>
        <button value="5" onClick={handleButtonClick}>5</button>
        <button value="6" onClick={handleButtonClick}>6</button>
        
        <button value="+" onClick={handleButtonClick}>+</button>
        <button value="1" onClick={handleButtonClick}>1</button>
        <button value="2" onClick={handleButtonClick}>2</button>
        <button value="3" onClick={handleButtonClick}>3</button>
      
        
        <button className={styles.clear} onClick={clearInput}>C</button>
        <button value="." onClick={handleButtonClick}>.</button>
        <button value="0" onClick={handleButtonClick}>0</button>
        <button value="=" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}
