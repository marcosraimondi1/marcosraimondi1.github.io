import styles from './experience.module.css'

const experience = [
  {
    title: 'Computer Engineer',
    company: 'Universidad Nacional de Cordoba',
    date: '2020-2025'
  },
  {
    title: 'Undergraduate Scholar in Digital Design and Digital Communications',
    company: 'Fundacion Fulgor',
    date: '2022-2024'
  }
]

export default function Experience () {
  return (
    <ul className={styles.list}>
      {experience.map((item, index) => (
        <li key={index} className={styles.item}>
          <b>{item.title}</b>
          <p>{item.company}</p>
          <p className={styles.date}>{item.date}</p>
        </li>
      ))}
    </ul>
  )
}
