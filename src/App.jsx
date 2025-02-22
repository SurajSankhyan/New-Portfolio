import Bio from "./Components/Bio"
import ContactForm from "./Components/ContactForm"
import EducationSection from "./Components/EducationSection"
import { Footer } from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"
import Skills from "./Components/Skills"
import { SKILLS } from "./constants"

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className=" container mx-auto relative z-10 flex flex-col items-center p-4 space-y-8px-4 md:px-8 lg:px-16">
      <Hero />
      <Navbar />
      <Project />
      <Bio />
      <Skills />
      <EducationSection />
      <ContactForm />
      <Footer />
    </div>
  </div>
  )
}

export default App