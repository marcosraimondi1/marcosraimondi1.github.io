import LinkIcon from '@/components/icons/LinkIcon'

import styles from './projects.module.css'
import { Badge, BADGES } from '@/components/badges'

const projects = [{
  title: 'IoT Dashboard',
  description: 'A flexible and customizable web dashboard for visualizing and managing IoT devices in real-time. Including firmware for embedded device.',
  image: '/projects/iotdash.webp',
  github: 'https://github.com/marcosraimondi1/iot_dashboard',
  badges: [
    BADGES.languages.javaScript,
    BADGES.frameworks.nodejs,
    BADGES.languages.cpp,
    BADGES.frameworks.nextjs,
    BADGES.tools.docker,
    BADGES.databases.mongodb,
    BADGES.frameworks.zephyrrtos
  ]
}]

export default function Projects () {
  return projects.map(({ title, description, badges, image, github }, index) => (
    <article key={index} className={styles.article}>
      <h3>
        <a
          href={github}
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          {title}
          <LinkIcon height={30} />
        </a>
      </h3>
      <p style={{ textWrap: 'pretty' }}>{description}</p>

      <div className={styles.tagList}>
        {
          badges.map((tag, index) => (
            <Badge key={index} {...tag} >
              {tag.icon} {tag.name}
            </Badge>
          ))
        }
      </div>

      <img
        src={image}
        alt={title}
        className={styles.image}
      />

    </article>
  ))
}
