import React from 'react';
import './Home.css';
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, It's <span className="highlight">Andrianirina Koloina Tsiorintsoa</span></h1>
        <p>I'm a <span className="highlight">Frontend Developer</span></p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestiae.
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

