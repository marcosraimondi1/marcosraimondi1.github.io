import { BADGES, Badge } from '../badges'

import styles from './skills.module.css'

export default function Skills () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <b>Languages</b>
        <div className={styles.tagList}>
          {
            Object.values(BADGES.languages).map((tag, index) =>
              <Badge key={index} {...tag} >
                {tag.icon} {tag.name}
              </Badge>
            )
          }
        </div>
      </div>

      <div>
        <b>Frameworks</b>
        <div className={styles.tagList}>
          {
            Object.values(BADGES.frameworks).map((tag, index) =>
              <Badge key={index} {...tag} >
                {tag.icon} {tag.name}
              </Badge>
            )
          }
        </div>
      </div>

      <div>
        <b>Databases</b>
        <div className={styles.tagList}>
          {
            Object.values(BADGES.databases).map((tag, index) =>
              <Badge key={index} {...tag} >
                {tag.icon} {tag.name}
              </Badge>
            )
          }
        </div>
      </div>

      <div>
        <b>Tools</b>
        <div className={styles.tagList}>
          {
            Object.values(BADGES.tools).map((tag, index) =>
              <Badge key={index} {...tag} >
                {tag.icon} {tag.name}
              </Badge>
            )
          }
        </div>
      </div>

      <div>
        <b>Cloud Services</b>
        <div className={styles.tagList}>
          {
            Object.values(BADGES.cloud).map((tag, index) =>
              <Badge key={index} {...tag} >
                {tag.icon} {tag.name}
              </Badge>
            )
          }
        </div>
      </div>

    </div>
  )
}
