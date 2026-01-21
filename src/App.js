import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Links />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
