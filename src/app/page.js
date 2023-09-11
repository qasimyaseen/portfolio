
import HeroSecti from './components/HeroSecti'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Navigation from './components/Navigation'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AcheivementSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className='container mx-auto px-12 py-4'>
        <Navigation/>
        <HeroSecti />
        <AchievementsSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  )
}
