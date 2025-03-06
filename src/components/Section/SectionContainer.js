import styles from './sectionContainer.module.css'

export default function SectionContainer ({ children, id }) {
  return (
    <section
      id={id}
      data-section={id}
      className={styles.section}
    >
      {children}
    </section>
  )
}
