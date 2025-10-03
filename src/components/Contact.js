import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
      <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">islamrafiq9090@gmail.com</a></p>
        <p>Skype: <a href="skype:live:.cid.f1a45728d9c8b202">live:.cid.f1a45728d9c8b202</a></p>
        <p>Telegram: <a href="https://t.me/islamrafiq" target="_blank" rel="noopener noreferrer">@islamrafiq</a></p>
      </div>
    </section>
  );
}

export default Contact;
