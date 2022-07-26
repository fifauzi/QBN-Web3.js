import React from 'react';
import Particles from '../particlesjs-config.json';
import ParticleConfig from './particle-config';

export default function ParticleBackground() {
  return <Particles params={ParticleConfig}></Particles>;
}
