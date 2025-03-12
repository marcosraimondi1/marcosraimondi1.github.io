import styles from './button.module.css'

const AButton = ({ href, children }) => {
  return (
    <a
      target="_blank"
      rel="noopener"
      href={href}
      className={styles.aButton}
    >
      {children}
    </a>

  )
}

export default AButton
