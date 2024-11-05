import React from "react";
import './Projects.css';

function Projects() {

  return (
    <section id="projects">
      <h2 className="projects-title">projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>UI Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus delectus magnam sapiente alias.</p>
        </div>
        <div className="project-card">
          <h3>Frontend Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime quo.</p>
        </div>
        <div className="project-card">
          <h3>Backend Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore fugiat totam ex.</p>
        </div>
        <div className="project-card">
          <h3>Testing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut voluptatem sit deserunt.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
