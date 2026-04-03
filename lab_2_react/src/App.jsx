import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className={theme === 'dark' ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
        <div className="bg-gray-100 min-h-screen p-4 transition-all duration-300">
          <div className="max-w-3xl mx-auto space-y-4">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="space-y-4">
              <About />
              <Education />
              <Projects />
              <Skills />
              <Reviews />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default App;