import styles from './header.module.css'

const navItems = [
  { title: 'Home', label: 'home', url: '/#' },
  { title: 'About', label: 'about-me', url: '/#about-me' },
  { title: 'Projects', label: 'my-projects', url: '/#my-projects' },
  { title: 'Journey', label: 'journey', url: '/#journey' },
  { title: 'Skills', label: 'skills', url: '/#skills' }
]

export default function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {navItems.map((item, index) => (
          <a className={styles.links} key={index} aria-label={item.label} href={item.url}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  )
}
