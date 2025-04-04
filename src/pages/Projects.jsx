import React from "react";
import "../style/Projects.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Interactive To-Do List Application",
    description:
      "Developed a dynamic to-do list web application using HTML, CSS, and JavaScript, with real-time task management features.",
  },
  {
    title: "Weather Forecast Application",
    description:
      "Built a weather application using HTML, CSS, and JavaScript, integrating real-time weather data via APIs.",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Designed and developed a fully functional Tic-Tac-Toe game with HTML, CSS, and JavaScript, incorporating real-time game updates.",
  },
  {
    title: "Dummy Application with CRUD Features and ReactJS",
    description:
      "Built a CRUD application using ReactJS, Firebase, JSON Server, and Axios API, demonstrating expertise in dynamic UI design.",
  },
  {
    title: "Dog Hospital Website",
    description:
      "Designed a dog hospital website prototype using HTML, CSS, and Bootstrap, ensuring responsive layout and organized design.",
  },
];

function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <Slider {...sliderSettings} className="project-slider">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
