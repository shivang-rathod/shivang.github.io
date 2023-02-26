import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        Built with NextJS, TypeScript and ❤️.{' '}
        <a
          href="https://github.com/H-Richard/google-search"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  )
}
