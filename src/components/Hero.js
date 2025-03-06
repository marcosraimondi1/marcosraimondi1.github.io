import LinkedinIcon from '@/components/icons/LinkedinIcon'
import MailIcon from '@/components/icons/MailIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import CVIcon from '@/components/icons/CVIcon'

const links = [
  { url: 'https://linkedin.com/in/marcos-raimondi', icon: LinkedinIcon },
  { url: 'https://github.com/marcosraimondi1', icon: GithubIcon },
  { url: 'https://drive.google.com/file/d/1TRWvolv9FgV6CqYB8cu2wrPswiOKOPyO/view?usp=drive_link', icon: CVIcon },
  { url: 'mailto:marcosraimondi1@gmail.com', icon: MailIcon }
]

export default function Hero () {
  return (
    <div style={styles.hero}>
      <p>Hi, I&apos;m</p>
      <h1>Marcos Raimondi.</h1>
      <p>I&apos;m a <b>Computer Engineer</b> and Software Developer.</p>

      <ul style={styles.ul}>
        {links.map((item, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noopener"
              href={item.url}
              style={styles.links}
            >
              <item.icon height={36} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '3rem',
    width: '100%'
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyleType: 'none',
    paddingTop: '1rem',
    gap: '2rem'
  },
  links: {
    textDecoration: 'none',
    opacity: 0.75,
    paddingTop: '1rem'
  }
}
