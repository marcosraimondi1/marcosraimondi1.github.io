import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SectionContainer from '@/components/SectionContainer'
import SectionTitle from '@/components/SectionTitle'
import Skills from '@/components/Skills'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeIcon from '@/components/icons/CodeIcon'
import PortfolioIcon from '@/components/icons/PortfolioIcon'

export default function Home () {
  return (
    <>
      <Header />
      <main style={styles.main}>
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

        <SectionContainer id="experience">
          <SectionTitle>
            <PortfolioIcon height={36} />
            Experience</SectionTitle>
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

const styles = {
  main: {
    width: '100%',
    marginTop: '5rem',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
