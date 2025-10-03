import React from 'react';

function About() {
  return (
    <section id="about" className="about">
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I am Md Rafiqul Islam, a Computer Science and Engineering (CSE)
          student at Southeast University. I specialize in programming and digital
          marketing, with experience in Java, C, Flutter, Python, HTML, CSS, and
          platforms like AdSense, ADX, Search Arbitrage, and Media Buying. With a passion for innovation, I aim to bridge
          the gap between technology and creativity.
        </p>
      </div>
      <div className="about-image">
        <div className="circle-wrapper">
          <img src={process.env.PUBLIC_URL + '/Assets/about.png'} alt="Md Rafiqul Islam" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
  

  );
}

export default About;
