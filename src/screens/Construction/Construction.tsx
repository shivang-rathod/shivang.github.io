import { NextPage } from 'next'
import Image from 'next/image'

import styles from './Construction.module.scss'

export const Construction: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>About Shivang</h3>
        <p>Page is coming soon! Probably</p>
		<p>With over 6 years of experience in marketing and creating results-driven solutions, I help businesses thrive and scale with 10x traffic and 2x conversion growth YoY. As an SEO expert, I love solving problems and keeping brands ahead in the competitive market. 🚀</p>
		<p>Having hands-on experience in different stages of product development, from ideation to implementation and distribution to marketing, my refined skill set enables me to tap into more opportunities and accomplish tasks efficiently. 👨‍💻</p>
		<p>Long story short. 💭</p>
		<p>I am a professional digital marketer and passionate SEO specialist based in Bangalore. Currently, I am working with Moda, which helps eCommerce marketers deliver exceptional omnichannel marketing experiences. 🛒</p>
		<p>In my free time, I enjoy exploring local food and places, reading, traveling, and hanging out with tech nerds. 🕺</p>
		<p>Let's connect and share our stories! 🤝</p>
      </div>
    </div>
  )
}
