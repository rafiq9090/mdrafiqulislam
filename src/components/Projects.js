import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Spring Boot Movie Backend</h3>
          <p>RESTful backend service for a movie application using Spring Boot.</p>
          <a href="https://github.com/rafiq9090/springboot-movie-backend" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Wallpaper (Android, Native Java)</h3>
          <p>Android wallpaper app built with native Java in Android Studio.</p>
          <a href="https://github.com/rafiq9090/Wallpaper" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Language Translator (Android, Offline, Native Java)</h3>
          <p>Offline language translator app built in Android Studio using native Java.</p>
          <a href="https://github.com/rafiq9090/LanguageTranslator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Photo Editor (Android)</h3>
          <p>Feature-rich Android photo editing app.</p>
          <a href="https://github.com/rafiq9090/Photo_Editor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Kids Learning Book App (Android, Native Java)</h3>
          <p>Interactive kids learning app built in Android Studio using native Java.</p>
          <a href="https://github.com/rafiq9090/Kids_Learning_BookApp" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>T-search (Chrome Extension)</h3>
          <p>Chrome extension to enhance search productivity.</p>
          <a href="https://github.com/rafiq9090/T-search" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>OneApp (Flutter)</h3>
          <p>Multi-feature mobile app built with Flutter.</p>
          <a href="https://github.com/rafiq9090/OneApp" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
