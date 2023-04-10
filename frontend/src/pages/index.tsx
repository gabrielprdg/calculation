import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import styles from './styles.module.scss'
import Historic, { HistoricProps } from "@/components/Historic";
import { GetServerSideProps } from "next";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export type HomeProps = {
  calculations: any
}

export default function Home({ calculations }: HomeProps) {
  const [historicData, setHistoricData] = useState(calculations);


  return (
    <>
      <div>
        <Header/>
        <Calculator setHistoricData={setHistoricData}/>
        <Historic historicData={historicData}/>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const calculationData = await api.get('calculations')
  

  const calculations = calculationData.data

  return {
    props: {
      calculations
    }
  }
}
