import { NextPage } from 'next'
import Image from 'next/image'

import styles from './Construction.module.scss'

export const Construction: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>About</h3>
        <p>Shivang Rathod is a Digital Marketing Team Leader at leading Ecommerce Development Company, also an independent SEO-focused content writer and a digital marketing consultant in his free time. With his content writing and marketing strategies, Shivang helps businesses to achieve 10x growth in traffic and 2x growth in conversions YoY. He has years of combined experience in creating results-driven content and data-driven content marketing and SEO strategies. He used consults and work with different generous businesses to help or streamline their campaigns and writings.</p>
      </div>
    </div>
  )
}
