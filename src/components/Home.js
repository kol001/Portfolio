import React from 'react';
import './Home.css';
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Bonjour, Je suis <span className="highlight">Andrianirina Koloina Tsiorintsoa</span></h1>
        <p>Je suis un <span className="highlight">developpeur</span> passionné par le <span className="highlight">développement</span> d'applications optimisées.</p>
        <p className="description">
        Je suis Koloina, développeur passionné et créatif, spécialisé dans la création d'applications mobiles avec Flutter et React. Mon expertise réside dans le développement d'interfaces modernes, performantes et intuitives, offrant une expérience utilisateur optimale. Grâce à mon expérience, je m'efforce d'apporter des solutions innovantes et de qualité pour chaque projet auquel je participe
        </p>
        
        <div className="buttons">
          <button className="btn hire-btn">Hire</button>
          <button className="btn contact-btn">Contact</button>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="home-image">
        <img src="path/to/your-image.jpg" alt="Amelia" />
      </div>
    </section>
  );
}

export default Home;

