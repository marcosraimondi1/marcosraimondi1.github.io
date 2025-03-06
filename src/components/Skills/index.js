import * as Badges from '@/components/badges'

import styles from './skills.module.css'

export default function Skills () {
  return (
    <div className={styles.tagList}>
      {Object.values(Badges).map((Badge, index) => (
        <Badge key={index} className={styles.tag} />
      ))}
    </div>
  )
}
