import React from 'react';
import { FaFacebook, FaLinkedin, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Hello,</h2>
        <h1>I am Md Rafiqul Islam</h1>
        <p>Software Developer | Media Buyer | Digital Marketer </p>
        <p>
          Passionate about delivering creative and innovative digital solutions. Specializing in
          programming, search arbitrage, and digital advertising platforms like Google, Meta,
          Taboola, and Outbrain with the experience of more than 2 years now.
        </p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaPinterestP size={24} />
          </a>
        </div>
        <button className="hero-button" onClick={() => window.location.href = '#contact'}>
          Contact Me
        </button>
      </div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + '/Assets/M.png'} alt="Md Rafiqul Islam" loading="lazy" />
      </div>
    </section>
  );
}

export default Hero;
