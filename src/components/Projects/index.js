import LinkIcon from '@/components/icons/LinkIcon'

import styles from './projects.module.css'
import {
  JavaScriptBadge, NextJSBadge, MongoDBBadge, ReactBadge,
  DockerBadge, CBadge, NodeJSBadge, MQTTBadge
} from '@/components/badges'

const projects = [
  {
    title: 'IoT Dashboard',
    description: 'A flexible and customizable web dashboard for visualizing and managing IoT devices.',
    tags: [JavaScriptBadge, NextJSBadge, MongoDBBadge, ReactBadge, DockerBadge, CBadge, NodeJSBadge, MQTTBadge],
    image: '/projects/iotdash.webp',
    github: 'https://github.com/marcosraimondi1/iot_dashboard'
  }

]

export default function Projects () {
  return projects.map(({ title, description, tags, image, github }, index) => (
    <article key={index} className={styles.article}>
      <h3>
        <a
          href={github}
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          {title}

          <LinkIcon height={32} />
        </a>
      </h3>
      <p style={{ textWrap: 'pretty' }}>{description}</p>

      <div className={styles.tagList}>
        {
          tags.map((tag, index) => (
            <span key={index} >
              {tag({ className: styles.tag })}
            </span>
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
