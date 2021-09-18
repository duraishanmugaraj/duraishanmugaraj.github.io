import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Main from "./pages/Main"
import Aboutme from './pages/Aboutme';
import Whatido from './pages/Whatido';
import Projects from './pages/Projects';
import Contact from "./pages/Contact"

function App() {
  return (<>

    <Navbar />
    <Main />
    <Aboutme />
    <Whatido />
    <Projects />
    <Contact />

  </>);
}

export default App;
