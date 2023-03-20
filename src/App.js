import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
