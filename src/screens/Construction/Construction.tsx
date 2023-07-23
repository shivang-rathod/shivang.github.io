import { NextPage } from 'next'
import Image from 'next/image'

import styles from './Construction.module.scss'

export const Construction: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Under Construction</h3>
        <p>Page is coming soon! Probably</p>
      </div>
    </div>
  )
}
