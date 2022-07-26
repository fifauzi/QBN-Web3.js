import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import logo from './logo.svg';
import '../../component/home.css';
import particlesOptions from '../../particles.json';

function Home() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="home">
      <Particles options={particlesOptions} init={particlesInit} />
      <header className="home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/particles.json</code> to customize Particles, then save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="https://particles.js.org" target="_blank" rel="noopener noreferrer">
          See Particles samples
        </a>
      </header>
    </div>
  );
}

export default Home;
