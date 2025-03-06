import LinkIcon from './icons/LinkIcon'

const projects = [
  {
    title: 'IoT Dashboard',
    description: 'A flexible and customizable web dashboard for visualizing and managing IoT devices.',
    tags: ['React', 'MongoDB', 'Docker', 'MQTT', 'C', 'Next.js', 'Node.js'],
    image: '/projects/iotdash.webp',
    github: 'https://github.com/marcosraimondi1/iot_dashboard'
  }

]

export default function Projects () {
  return projects.map(({ title, description, tags, image, github }, index) => (
    <article key={index} style={styles.article}>
      <h3>
        <a
          href={github}
          target="_blank"
          rel="noopener"
          style={styles.link}
        >
          {title}

          <LinkIcon height={32} />
        </a>
      </h3>
      <p>{description}</p>

      <div>
        {
          tags.map((tag, index) => (
            <span key={index} style={styles.tags}>
              {tag}
            </span>
          ))
        }
      </div>

      <img
        width="50%"
        src={image}
        alt={title}
        style={{ borderRadius: '20px' }}
      />

    </article>
  ))
}

const styles = {
  article: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textDecoration: 'none',
    gap: '8px'
  },
  tags: {
    marginRight: '5px',
    borderRadius: '20px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px',
    margin: '5px',
    opacity: 0.75
  }
}

// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat" alt="MongoDB Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat" alt="Docker Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MQTT-606?logo=mqtt&logoColor=fff&style=flat" alt="MQTT Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=flat" alt="C Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat" alt="Next.js Badge" />
// <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge" />
