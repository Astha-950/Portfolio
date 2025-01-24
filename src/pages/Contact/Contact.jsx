import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mldrwyjb");
  if (state.succeeded) {
    return <p className="success-message" >Thanks for joining!</p>;
  }

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28624.21170438064!2d78.1875108193265!3d26.26080453063885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c129f0b213b3%3A0x11f169fd7d38092!2sDeen%20Dayal%20Nagar%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1724141158432!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xjkknyab"
          method="post"
          className="form"
          data-form
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            className="form-btn"
            type="submit"
            data-form-btn
            disabled={state.submitting}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
