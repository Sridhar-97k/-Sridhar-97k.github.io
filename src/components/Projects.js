import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Xtensa Xplorer IDE',
      description: 'Production-grade Eclipse RCP IDE for developing and debugging software for customizable Xtensa processors, supporting single-core and multi-core embedded systems.',
      tags: ['Eclipse RCP', 'Java', 'Multi-core Debug', 'Embedded Systems']
    },
    {
      title: 'Linker Map Parser & Visual Editor',
      description: 'Designed and implemented a tool from scratch to analyze GNU ld map files, used daily by engineering teams to debug and validate application executables.',
      tags: ['Java', 'JavaCC', 'Parser Design', 'SWT/JFace']
    },
    {
      title: 'Memory Protection Unit (MPU) Integration',
      description: 'Contributed research and implementation for MPU features, supporting correctness and safety-critical memory workflows within the IDE.',
      tags: ['Memory Management', 'Embedded Systems', 'C++', 'Systems Programming']
    },
    {
      title: 'IKE Daemon Testing Framework',
      description: 'Built a unit testing framework for VMware\'s Internet Key Exchange daemon, supporting end-to-end VPN connections across NSX-Edge devices.',
      tags: ['Python', 'Testing Framework', 'VPN', 'Network Security']
    },
    {
      title: 'Pothole Detection System',
      description: 'End-to-end prototype using MobileNet for detecting road conditions, integrated with GPS, Google Maps APIs, and AWS IoT for cloud notifications.',
      tags: ['Machine Learning', 'MobileNet', 'AWS IoT', 'Computer Vision']
    },
    {
      title: 'Memory Map Editor Enhancement',
      description: 'Enhanced editor to support user-defined memory regions, configurable attributes, and flexible placement of sections for complex embedded architectures.',
      tags: ['Java', 'Eclipse RCP', 'Memory Architecture', 'Embedded Tools']
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
