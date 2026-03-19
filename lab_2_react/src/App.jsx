import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
