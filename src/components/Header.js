import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home" class="menu-item">Accueil</a></li>
          <li><a href="#projects" class="menu-item">Projets</a></li>
          <li><a href="#skills" class="menu-item">Compétences</a></li>
          <li><a href="#about" class="menu-item">À propos</a></li>
          <li><a href="#contact" class="menu-item">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
