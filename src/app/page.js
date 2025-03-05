import Image from 'next/image'
import styles from './page.module.css'

export default function Home () {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <p>Hi, I&apos;m</p>
          <h1>Marcos Raimondi.</h1>
          <p>I&apos;m a <b>Computer Engineer</b> and Software Developer.</p>
        </div>

        <ul className={styles.contact}>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/gmail.svg"
              alt="Gmail logomark"
              width={24}
              height={24}
              style={{ marginRight: '7px' }}
            />
            <a href="mailto:marcosraimondi1@gmail.com">
              marcosraimondi1@gmail.com
            </a>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/linkedin.svg"
              alt="Linkedin logomark"
              width={24}
              height={24}
              style={{ marginRight: '7px' }}
            />
            <a href="https://linkedin.com/in/marcos-raimondi">
              marcos-raimondi
            </a>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/github.svg"
              alt="Github logomark"
              width={24}
              height={24}
              style={{ marginRight: '7px' }}
            />
            <a href="https://github.com/marcosraimondi1">
              marcosraimondi1
            </a>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Image
              src="/cv.svg"
              alt="curriculum"
              width={24}
              height={24}
              style={{ marginRight: '7px' }}
            />
            <a href="https://drive.google.com/file/d/1TRWvolv9FgV6CqYB8cu2wrPswiOKOPyO/view?usp=drive_link">
              curriculum-vitae.pdf
            </a>
          </li>
        </ul>

        <div>
          <h2>About Me</h2>
          <br />
          <p>I&apos;m a recently graduated Computer Engineer, looking forward to working on innovative projects.
            I&apos;m passionate about technology and software development, with special interest in Web Development,
            IoT and Cybersecurity
          </p>

          <br />

          <div>
            <h2>Main Projects</h2>

            <br />

            <div>
              <h3>IoT Dashboard</h3>
              <p>A flexible and customizable web dashboard for visualizing and managing IoT devices.</p>

              <br />

              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat" alt="MongoDB Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat" alt="Docker Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MQTT-606?logo=mqtt&logoColor=fff&style=flat" alt="MQTT Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=flat" alt="C Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat" alt="Next.js Badge" />
              <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge" />

            </div>

            <br />

          </div>

          <br />

          <div>
            <h2>Experience</h2>
            <br />
            <ul className={styles.lists}>
              <li><b>Undergraduate Scholar in Digital Design and Digital Communications</b> Fundacion Fulgor, 2022-2024</li>
            </ul>
          </div>

          <br />

          <div>
            <h2>Education</h2>
            <br />
            <ul className={styles.lists}>
              <li><b>Computer Engineer</b> Universidad Nacional de Cordoba, 2020-2025</li>
            </ul>
          </div>

          <br />

          <div>
            <h2>Skills</h2>
            <br />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat" alt="Python Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat" alt="MongoDB Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat" alt="Docker Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MQTT-606?logo=mqtt&logoColor=fff&style=flat" alt="MQTT Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=flat" alt="C Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat" alt="Next.js Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat" alt="MySQL Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/GNU%20Bash-4EAA25?logo=gnubash&logoColor=fff&style=flat" alt="GNU Bash Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat" alt="Git Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Amazon%20Web%20Services-232F3E?logo=amazonwebservices&logoColor=fff&style=flat" alt="Amazon Web Services Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=000&style=flat" alt="Linux Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript Badge" />
            <img style={{ marginRight: '5px' }} src="https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=fff&style=flat" alt="C++ Badge" />
          </div>
        </div>

      </main>
    </div>
  )
}
