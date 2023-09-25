import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Project from './components/project/Project';
import Skills from './components/skills/Skills';
import Certificate from './components/certificate/Certificate';


const App = () => {
  return (
    <>
    <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Project />
        <Certificate />
      </main>
    </>
  )
}

export default App;
