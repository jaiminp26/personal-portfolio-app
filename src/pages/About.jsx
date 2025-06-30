import React from "react";
import "../style/About.css"; // Import the external CSS file

const skills = [
  {
    title: "Front-End Development",
    description:
      "Crafting responsive and dynamic user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.",
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side applications with Node.js and managing databases like MongoDB and MySQL.",
  },
  {
    title: "Programming Languages",
    description:
      "Proficient in C, C++, and Python, enabling versatile software development solutions.",
  },
];

function About() {
  return (
    <div className="container-fluid about-container">
      <div className="main-content">
        <section className="about-me">
          <img
            src="/images/jaimin_profile.jpg"
            alt="Jaimin Prajapati"
            className="profile-img"
          />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hello! I'm Jaimin Prajapati, a dedicated Full-Stack Developer with
              a strong foundation in computer information technology. I recently
              graduated with a Bachelor of Science degree from GLS University,
              where I honed my skills in programming languages such as C, C++,
              Python, and databases like MySQL.
            </p>
            <p>
              To further enhance my expertise, I enrolled in a Full-Stack
              Development course at Red and White Education. Through this
              program, I've gained proficiency in front-end technologies like
              HTML, CSS, JavaScript, React.js, and Bootstrap. Currently, I'm
              expanding my knowledge in back-end technologies, focusing on
              Node.js and MongoDB.
            </p>
            <p>
              My goal is to leverage this comprehensive skill set to build
              seamless and efficient web applications that provide exceptional
              user experiences.
            </p>
          </div>
        </section>
      </div>

      <section className="skills">
        <h2>Skills and Technologies</h2>
        <div className="cards-container">
          {skills.map((skill, index) => (
            <div className="card" key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education and Certifications</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Bachelor of Science in Computer Information Technology</h3>
            <p>
              GLS University, Graduated
              <br /> [2021-2024]
            </p>
          </div>
          <div className="card">
            <h3>Full-Stack Development Certification</h3>
            <p>
              Red and White Education, Completed
              <br /> [2025-2026]
            </p>
          </div>
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <p>
          Download my resume to learn more about my professional journey and
          accomplishments.
        </p>
        <a href="/resume/jaimins_resume.pdf" download className="resume-button">
          Download
        </a>
      </section>
    </div>
  );
}

export default About;
