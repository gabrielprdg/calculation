import React, { useState } from "react";
import styles from './styles.module.scss'
import { format } from 'date-fns';

type CalculationProps = {
  calc: string
  answer: number
  created_at: Date
}

export type HistoricProps = {
  historicData: CalculationProps[]
}

export default function Historic({historicData} : HistoricProps) {


  return (
    <div className={styles.historicContainer}> 
      <h2>Histórico</h2>

      {historicData.map((hist, index) => {
        const formattedDate = format(new Date(hist.created_at), 'dd/MM/yyyy HH:mm:ss');
        return (
          <div key={index} className={styles.historic}>
            <div className={styles.calc}>
              <p>Calculo</p>
              <div>{hist.calc}</div>
            </div>

            <div className={styles.answer}>
              <p>Resultado</p>
              <div>{hist.answer}</div>
            </div>

            <div className={styles.date}>
              <p>Data do calculo</p>
              <div>{formattedDate}</div>
            </div>
          </div>
        )
      })}
      
    </div>
  );
}
