import {GrMail} from "react-icons/gr";
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import Form from "./form";

const Contact = () => {
  const emailIcon = <GrMail className="contact_information--icon" />;
  const gitHubIcon = <FaGithub className="contact_information--icon" />;
  const linedInIcon = <FaLinkedinIn className="contact_information--icon" />;

  return (
    <div className="contact">
      <h2 className="contact_heading">CONTACT ME!</h2>
      <div className="contact_information">
        <div>
          <p className="contact_information--name">Esila Adajewa</p>
          <div className="contact_information--details">
            {emailIcon}
            <p className="contact_information--paragraph">
              esila.adajewa@gmail.com
            </p>
          </div>
          <div className="contact_information--details">
            {gitHubIcon}
            <a
              href="https://github.com/Esila-A"
              className="contact_information--link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="contact_information--details">
            {linedInIcon}
            <a
              href="https://www.linkedin.com/in/esila-adajewa-567296223/"
              className="contact_information--link"
              target="_blank"
              rel="noreferrer"
            >
              LinedIn
            </a>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
