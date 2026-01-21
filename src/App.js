import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Links />
        </main>
      </div>
    </div>
  );
}

export default App;
