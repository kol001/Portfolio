import React from "react";
import './Contact.css';


function Contact() {
  return (
    <section id="contact" class="contact">
      <h2 class="contact-title">Contactez-moi</h2>
      <form class="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div class="social-links">
        <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
      </div>
    </section>
  );
}

export default Contact;
