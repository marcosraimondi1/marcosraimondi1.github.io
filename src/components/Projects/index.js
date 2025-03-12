import styles from './projects.module.css'
import { Badge, BADGES } from '@/components/badges'
import AButton from '../AButton'
import GithubIcon from '../icons/GithubIcon'

const projects = [
  {
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
  },
  {
    title: 'MIPS IV FPGA Implementation',
    description: 'Implemented from scratch a simplified version of a MIPS IV processor in a FPGA, including a UART interface for loading and debugging assembly programs. Developed a web interface to interact with the FPGA via UART.',
    image: '/projects/mips.webp',
    github: 'https://github.com/marcosraimondi1/tps-arqui/tree/tp3',
    badges: [
      BADGES.languages.verilog,
      BADGES.languages.python
    ]
  }
]

export default function Projects () {
  return projects.map(({ title, description, badges, image, github }, index) => (
    <article key={index} className={styles.article}>
      <h3> {title} </h3>
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

      <AButton href={github}>{<GithubIcon height={36} />} Code</AButton>

      <img
        src={image}
        alt={title}
        className={styles.image}
      />

    </article>
  ))
}
