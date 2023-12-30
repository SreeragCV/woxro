import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="details">
        <h1 className="project">
          Interested in delving deeper into the project?
        </h1>
        <p>
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at <strong>hello@abc.com</strong> or give us a call at{" "}
          <strong>+91 480 20802730</strong>.
        </p>
      </div>
      <p className="buttons">
        <button className="skype">Ring us on Skype</button>
        <button className="contact-button">Contact Us</button>
      </p>
    </div>
  );
}

export default Contact;
