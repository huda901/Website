import React from 'react';

function Hero({ image, description }) {
  return (
    <section className="hero">
      <img src={image} alt="" />
      <p className='p'>{description}</p>
    </section>
  );
}

export default Hero;
