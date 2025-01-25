import { useState } from 'react';

const Portfolio = () => {
  // Define the project data directly in this file
  const projects = [
    {
      id: 1,
      title: "Animated Solar System",
      video: "https://drive.google.com/file/d/1v9v8KV9Fcty-h_6gDil9M6ibeeap0XfJ/preview",
      shortDescription: "This project is a visual depiction of the solar system created using HTML, CSS, and JavaScript.",
      longDescription: "The project showcases interactive 2D and 3D planet models with info cards, highlighting my front-end web development skills.",
      github: "https://github.com/Astha-950/Animated-Solar-System",
      type: "iframe",  
    },
    {
      id: 2,
      title: "Organic",
      video: "https://drive.google.com/file/d/1mPshD0bnK_rl5Jvchfc2j1cUpE3evMuW/preview",
      shortDescription: "Organic is an e-commerce platform dedicated to providing fresh and high-quality organic fruits and ",
      longDescription: " vegetables. We aim to offer sustainably sourced, chemical-free produce. Customers can easily explore organic products and add them to their cart using our user-friendly interface.",
      github: "https://github.com/Astha-950/Organic",
       type: "iframe",  
    },
    {
      id: 3,
      title: "Calorie Burnt Predictor",
      video: "https://drive.google.com/file/d/1EgH05I6DnK74B2aysgmxlPEROLCxVkOk/preview", 
      shortDescription: "A web app uses machine learning to predict calories burned during exercise based on inputs like  ",
      longDescription: " duration, gender, weight, height, body temperature, and heart rate. This project showcases machine learning from data cleaning to deployment via a user-friendly web interface.",
      github: "https://github.com/Astha-950/Calorie-Burnt-Predictor-",
      type: "iframe", 
    },
  ];

  const [expandedProjectId, setExpandedProjectId] = useState(null); // State to track expanded project

  // Toggle the expanded state for a specific project
  const toggleExpand = (projectId) => {
    setExpandedProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <li className="project-item" key={project.id}>
                <div className="project-card">
                  {/* Upper half: Video or Iframe */}
                  <div className="video-container">
                    {project.type === "video" ? (
                      <video
                        src={project.video}
                        loading="lazy"
                        className="video-item"
                        style={{ objectFit: "contain" }}
                        controls
                      />
                    ) : (
                      <iframe
                        src={project.video}
                        className="iframe-item"
                        width="100%"
                        height="315"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={project.title}
                      />
                    )}
                  </div>
                  {/* Lower half: Title, Description */}
                  <div className="project-details">
                    <h3 className="project-title">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit GitHub"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="project-description">
                      {project.shortDescription}
                      {isExpanded && <span>{project.longDescription}</span>}
                    </p>
                    <button
                      className="form-btn"
                      onClick={() => toggleExpand(project.id)}
                    >
                      <span>{isExpanded ? "Read Less" : "Read More"}</span>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
