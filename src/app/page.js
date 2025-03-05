import Image from 'next/image'
import styles from './page.module.css'

export default function Home () {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <p>Hi, I&apos;m</p>
          <h1>Marcos Raimondi.</h1>
          <p>I&apos;m a Computer Engineer and Software Developer.</p>
        </div>
        <ul>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/gmail.svg"
              alt="Gmail logomark"
              width={16}
              height={16}
              style={{ marginRight: '7px' }}
            />
            <a href="mailto:marcosraimondi1@gmail.com">
              marcosraimondi1@gmail.com
            </a>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/linkedin.svg"
              alt="Linkedin logomark"
              width={16}
              height={16}
              style={{ marginRight: '7px' }}
            />
            <a href="https://linkedin.com/in/marcos-raimondi">
              marcos-raimondi
            </a>
          </li>
        </ul>

      </main>

      <footer className={styles.footer}>
      </footer>

    </div>
  )
}
