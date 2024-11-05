import React from "react";
import './Skills.css';

function Skills() {
  // const skills = ["React", "Flutter", "Python", "Node.js", "MongoDB"];

  return (
  <section id="skills" class="skills">
  <h2 class="skills-title">Compétences</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2021</div>
      <div class="timeline-content">
        <h3>Développement Front-End</h3>
        <p>Maîtrise des technologies HTML, CSS, et JavaScript.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2022</div>
      <div class="timeline-content">
        <h3>Développement Back-End</h3>
        <p>Expérience avec Node.js, Express, et bases de données SQL.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2023</div>
      <div class="timeline-content">
        <h3>Gestion de Projet</h3>
        <p>Utilisation des méthodologies Agile et Scrum pour la gestion d'équipe.</p>
      </div>
    </div>
  </div>
</section>

  );
}

export default Skills;
