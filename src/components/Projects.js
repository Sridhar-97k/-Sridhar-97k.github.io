import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Pothole Detection and Maintenance System',
      description: 'Developed an end-to-end prototype for detecting road surface conditions using camera images and a MobileNet-based classifier. Integrated GPS and Google Maps APIs for location tracking and AWS IoT for cloud-based notifications; explored edge-device integration using Arduino.',
      tags: ['MobileNet', 'Computer Vision', 'AWS IoT', 'GPS', 'Google Maps API', 'Arduino']
    },
    {
      title: 'Classroom Allocation Portal',
      description: 'Developed a lightweight web application for classroom booking and availability tracking using HTML/CSS and PHP/MySQL, focusing on authentication, scheduling logic, and conflict avoidance.',
      tags: ['PHP', 'MySQL', 'HTML/CSS', 'Web Development']
    }
  ];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
