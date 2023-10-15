import React from 'react';
import './hero.scss';
import hero from './Hero-Image.jpg';

const Hero = () => {
  return (
    <section>
      <img src={hero} alt='Jose Mourinho' />
      <h1>Live with Confidence</h1>
      <p>José Mourinho brings confidence to pan-African Sanlam campaign</p>
      <button>View project</button>
    </section>
  )
}

export default Hero;