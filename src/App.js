import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Featured from './Components/Featured/Featured';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import About from './Components/AboutMe_Eduation/About';
import Contact from './Components/ContactMe/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Featured />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default App;
