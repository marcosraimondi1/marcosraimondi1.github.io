const experience = [
  {
    title: 'Undergraduate Scholar in Digital Design and Digital Communications',
    company: 'Funacion Fulgor',
    date: '2022-2024'
  },
  {
    title: 'Computer Engineer',
    company: 'Universidad Nacional de Cordoba',
    date: '2020-2025'
  }
]

export default function Experience () {
  return (
    <ul style={styles.list}>
      {experience.map((item, index) => (
        <li key={index}>
          <h3>{item.title}</h3>
          <p>{item.company}</p>
          <p>{item.date}</p>
        </li>
      ))}
    </ul>
  )
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '1rem',
    listType: 'none'
  }
}
