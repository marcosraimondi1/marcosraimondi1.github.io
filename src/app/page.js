import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SectionContainer from '@/components/Section/SectionContainer'
import SectionTitle from '@/components/Section/SectionTitle'
import Skills from '@/components/Skills'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeIcon from '@/components/icons/CodeIcon'
import PathIcon from '@/components/icons/PathIcon'

import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer id="hero">
          <Hero />
        </SectionContainer>

        <SectionContainer id="about-me">
          <SectionTitle>About Me</SectionTitle>
          <AboutMe />
        </SectionContainer>

        <SectionContainer id="my-projects">
          <SectionTitle>
            <CodeIcon height={36} />
            My Projects</SectionTitle>
          <Projects />
        </SectionContainer>

        <SectionContainer id="journey">
          <SectionTitle>
            <PathIcon height={36} />
            Journey</SectionTitle>
          <Experience />
        </SectionContainer>

        <SectionContainer id="skills">
          <SectionTitle>Skills</SectionTitle>
          <Skills />
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
