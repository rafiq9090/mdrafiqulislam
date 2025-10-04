// Make sure to run: npm install @formspree/react
// For help: formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  // Replace "mvgwreol" with the actual Formspree form ID if different
  const [state, handleSubmit] = useForm('mvgwreol');

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Thanks for the message! A confirmation has been sent if notifications are enabled.</p>
        <div className="contact-info">
          <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">islamrafiq9090@gmail.com</a></p>
          <p>Skype: <a href="skype:live:.cid.f1a45728d9c8b202">live:.cid.f1a45728d9c8b202</a></p>
          <p>Telegram: <a href="https://t.me/islamrafiq" target="_blank" rel="noopener noreferrer">@islamrafiq</a></p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          aria-required="true"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email" className="sr-only">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          aria-required="true"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          aria-required="true"
          rows={5}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Send'}
        </button>
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
