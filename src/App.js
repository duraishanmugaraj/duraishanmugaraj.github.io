import React, { useEffect, useState } from "react";
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Main from "./pages/Main"
import Aboutme from './pages/Aboutme';
import Whatido from './pages/Whatido';
import Projects from './pages/Projects';
import Contact from "./pages/Contact"
import { globalStyles } from "./portfolio"
import Loader from './components/loaders/Loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const maincontent = <div>
    <Navbar />
    <Main />
    <Aboutme />
    <Whatido />
    <Projects />
    <Contact />
  </div>

  return <div style={globalStyles}>
    {loading ? <Loader /> : maincontent}
  </div>
}

export default App;
