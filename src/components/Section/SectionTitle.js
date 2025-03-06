export default function SectionTitle ({ children }) {
  return (
    <h2 style={styles.h2}>
      {children}
    </h2>
  )
}

const styles = {
  h2: {
    alignSelf: 'flex-start',
    marginTop: '2.75rem',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px'
  }
}
