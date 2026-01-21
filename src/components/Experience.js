import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer 2',
      company: 'Cadence Design Systems Inc',
      location: 'Pune, India',
      period: 'Oct 2019 – Jun 2025',
      highlights: [
        'Worked on Xtensa Xplorer, a production-grade Eclipse RCP IDE for customizable Xtensa processors',
        'Maintained and enhanced multi-core subsystem tooling (2+ core configurations)',
        'Designed and implemented Linker Map Parser and visual editor from scratch',
        'Contributed MPU features supporting safety-critical memory workflows',
        'Enhanced Memory Map Editor with user-defined regions and configurable attributes',
        'Maintained 20–30 SWTBot-based UI tests and JUnit regressions'
      ]
    },
    {
      title: 'R&D Intern',
      company: 'VMware Inc',
      location: 'Pune, India',
      period: 'Jun 2018 – Dec 2018',
      highlights: [
        'Designed unit testing framework for Internet Key Exchange (IKE) daemon',
        'Built flexible test harness for end-to-end VPN connections across NSX-Edge devices',
        'Improved test isolation, repeatability, and developer productivity'
      ]
    }
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="experience-header">
              <div>
                <h3>{exp.title}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="separator">•</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="highlights">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
