import './App.css'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Education from './components/Education'
import Navbar from './components/Navbar'
import NewHero from './components/NewHeroSection'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div className='h-auto overflow-x-hidden overflow-auto scroll text-neutral-300 antialiased '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div> */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Black bg */}
        {/* <div className="absolute top-0 z-[-3] h-screen w-screen bg-neutral-950"></div> */}

      </div>
      <div className='sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto' >
        <Navbar />
        {/* <Hero /> */}
        <NewHero />
        <Technologies />
        <Education />
        <Projects />
        <CodingProfiles />
        <Contact />
      </div>
    </div>
    
    

  )
}

export default App;