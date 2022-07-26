import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

let date = new Date();
let year = date.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer_copyright">Copyright &copy; {year} Esila Adajewa</p>
      <div className="footer_links">
        <a href="https://github.com/Esila-A">
          <FaGithub className="footer_links--icon"/>
        </a>
        <a href="https://www.linkedin.com/in/esila-adajewa-567296223/">
          <FaLinkedinIn className="footer_links--icon"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
