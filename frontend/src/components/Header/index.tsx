import Image from 'next/image'
import { useState } from 'react'
import L5Logo from '../../../public/l5-logo.png'
import styles from './styles.module.scss'

export default function Header(){

  const [openMenu,setOpenMenu] = useState(false)

  
  function menuToggle() {
    setOpenMenu(!openMenu)
  }

  return (
      <div className={styles.headerContainer}>
        <div className={styles.landing}>
          <div className={styles.headTitle}>
              <div className={styles.title}>
                <Image src={L5Logo} alt="L5Logo" width={100}/>
              </div>
          </div>
        </div>
      </div>
    )
}
