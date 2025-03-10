import { BADGES, Badge } from '../badges'

import styles from './skills.module.css'

export default function Skills () {
  return (
    <div className={styles.tagList}>
      {
        Object.values(BADGES).map((tag, index) =>
          <Badge key={index} {...tag} >
            {tag.icon} {tag.name}
          </Badge>
        )
      }
    </div>
  )
}
