import { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Suraksha Setu",
      image: "/images/SurakshaSetu.png",
      shortDescription:
        "SurakshaSetu is a women-centric platform created to provide support, awareness, and safety resources for women.",
      longDescription:
        "The project aims to build a safe digital space where women can share experiences, seek help, and stay informed about real-life issues affecting them.",
      github: "https://github.com/Astha-950/SurakshaSetu",
    },
    {
      id: 2,
      title: "Health Mate",
      image: "/images/Health-Mate.png",
      shortDescription:
        "Health Mate is an AI-powered health companion designed to support women in managing PCOS.",
      longDescription:
        "The application leverages machine learning to analyze women's health data for personalized health recommendations.",
      github: "https://github.com/Astha-950/Health-Mate",
    },
    {
      id: 3,
      title: "Calorie Burnt Predictor",
      image: "/images/CalorieBurntPredictor.png",
      shortDescription:
        "A web app that uses machine learning to predict calories burned during exercise.",
      longDescription:
        "This project showcases machine learning from data cleaning to deployment via a user-friendly web interface.",
      github: "https://github.com/Astha-950/Calorie-Burnt-Predictor-",
    },
  ];

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpand = (projectId) => {
    setExpandedProjectId((prevId) =>
      prevId === projectId ? null : projectId
    );
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <li className="project-item" key={project.id}>
                <div className="project-card">
                  {/* Image Section */}
                  <div className="video-container">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="video-item"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                  </div>

                  {/* Details Section */}
                  <div className="project-details">
                    <h3 className="project-title">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="project-description">
                      {project.shortDescription}
                      {isExpanded && (
                        <span> {project.longDescription}</span>
                      )}
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
