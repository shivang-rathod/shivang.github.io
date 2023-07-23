import { friends, profiles } from 'src/content'
import { SocialProfile, Friend } from 'src/components'
import styles from './About.module.scss'

const globe = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.globe}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
)

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h4>About</h4>
        <div className={styles.website}>{globe} shivangrathod.com</div>
        <p className={styles.description}>
          With over 6+ years of experience, shivang is digital marketing professional who creates results-driven solutions and helps businesses thrive and scale with 10x traffic and 2x conversion growth YoY. He loves solving problems and keeping brands ahead in their competitive market.
        </p>
        <div className={styles.stat}>
          <span>Current Ciy: </span>Bangalore, India
        </div>
        <div className={styles.stat}>
          <span>Organizations founded: </span>1.73 m (5 feet 8 and 7/64 inches)*
        </div>
		<div className={styles.stat}>
          <span>Nationality: </span>Indian
        </div>

        <div className={styles.border} />
      </div>
      <div className={styles.profiles}>
        <h4>Profiles</h4>
        <div className={styles.socials}>
          {profiles.map((profile) => (
            <SocialProfile {...profile} key={profile.label} />
          ))}
        </div>
        <div className={styles.border} />
      </div>
      <div className={styles.people}>
        <h4>People also search for</h4>
        <div className={styles.socials}>
          {friends.map((friend) => (
            <Friend {...friend} key={friend.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
