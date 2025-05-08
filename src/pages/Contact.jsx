import React from "react";
import "../style/Contact.css"; // Import the external CSS file
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
// import { db } from "../firebase"; // Make sure to import firebase config

function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   await db.collection("contacts").add(data);
    //   alert("Your message has been sent!");
    // } catch (error) {
    //   alert("There was an error sending your message.");
    // }
  };

  return (
    <div className="contact-container">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or want to get in touch, feel free to
          contact me using the form below or through my contact information.
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information with Icons */}
          <div className="col-md-6 contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <a href="mailto:jigarprajapati26122003@gmail.com">
                  <i className="fas fa-envelope"></i>
                  jigarprajapati26122003@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917567600738">
                  <i className="fas fa-phone"></i> +91 7567600738
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaimin-prajapati-369577312/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> Jaimin Prajapati
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jaiminp26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> jaiminp26
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
