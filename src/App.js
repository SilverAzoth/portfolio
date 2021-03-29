import React, { useState } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project';
import './App.css';


function App() {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const [projectNumber, setProject] = useState()

  return (
    <div className="App">
      <Navbar/>

      <Header/>

      <Services/>
  
      <Portfolio onPick={setProject} onOpen={() => setIsOpen(true)}/>

      <Project open={isOpen} project={projectNumber} onClose={() => setIsOpen(false)}/>

      <About/>

      <Contact/>

      <Footer/>
    </div>
  );
}
export default App;
