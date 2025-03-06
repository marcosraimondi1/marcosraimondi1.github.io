export default function SectionContainer ({ children, id }) {
  return (
    <section
      id={id}
      data-section={id}
      style={styles.section}
    >
      {children}
    </section>
  )
}

const styles = {
  section: {
    width: '80%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
