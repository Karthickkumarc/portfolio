import About from "./components/About/About";
import Certificate from "./components/Certificates/Certificate";
import Contactform from "./components/Contactform/Contactform";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import Intership from "./components/Internship/Intership";

import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project";
import Skill from "./components/Skills/Skill";
import Scrolltotop from "react-scroll-to-top"

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
     <About />
     <Education />
     <Skill />
     <Project></Project>
     <Intership />
     
     <Certificate />
     <Contactform />
  <Scrolltotop smooth top="100"  className="scroll"/>
    </div>
  );
}

export default App;
