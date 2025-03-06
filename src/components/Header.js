const navItems = [
  { title: 'About', label: 'about-me', url: '/#about-me' },
  { title: 'Projects', label: 'my-projects', url: '/#my-projects' },
  { title: 'Experience', label: 'experience', url: '/#experience' },
  { title: 'Skills', label: 'skills', url: '/#skills' }
]

export default function Header () {
  return (
    <header style={styles.header}>
      <nav style={styles.navBar}>
        {navItems.map((item, index) => (
          <a style={styles.links} key={index} aria-label={item.label} href={item.url}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: 'inherit',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
    width: '50%'
  },
  links: {
    textDecoration: 'none',
    opacity: 0.75
  }
}
