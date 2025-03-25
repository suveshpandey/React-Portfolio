import './App.css'
// import About from './components/About'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Education from './components/Education'
// import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div className='h-auto overflow-x-hidden overflow-auto scroll text-neutral-300 antialiased '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='lg:container mx-auto px-8' >
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Technologies />
        <Education />
        {/* <Experience /> */}
        <Projects />
        <CodingProfiles />
        <Contact />
      </div>
    </div>
    
  )
}

export default App
