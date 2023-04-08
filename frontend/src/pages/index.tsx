import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <div>
        <Header/>
        <Calculator/>

        <div className={styles.historicContainer}> 
          <h2>Histórico</h2>

          <div className={styles.historic}>
            oi
          </div>
        </div>

      </div>
    </>
  )
}
