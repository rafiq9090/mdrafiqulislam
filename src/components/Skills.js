import React from 'react';

function Skills() {
  // Updated skill proficiency percentages (adjustable)
  const skills = [
    { name: 'Android Studio', level: 85 },
    { name: 'Java', level: 90 },
    { name: 'C', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'Flutter', level: 92 },
    { name: 'HTML & CSS', level: 96 },
    { name: 'SQL', level: 78 },
  { name: 'MongoDB', level: 88 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'MySQL', level: 82 },
    { name: 'AdSense & ADX', level: 92 },
    { name: 'Digital Marketing', level: 96 },
    { name: 'Search Arbitrage', level: 93 },
    { name: 'React Native', level: 75 },
    { name: 'Wordpress', level: 95 },
    { name: 'Spring Boot', level: 88 }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            role="group"
            aria-label={`${skill.name} skill ${skill.level} percent`}
            title={`${skill.name} — ${skill.level}%`}
          >
            <div className="skill-card-header">
              <p className="skill-name">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
