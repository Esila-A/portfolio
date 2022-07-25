import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <p className="header_logo">EA | Front-End Developer</p>
      <nav className="header_navigation">
        <NavLink to="work" className="header_navigation--link" onClick={() => props.isMobilePhone && props.closeMenu()}>Work</NavLink>
        <NavLink to="about" className="header_navigation--link" onClick={() => props.isMobilePhone && props.closeMenu()}>About</NavLink>
        <NavLink to="contact" className="header_navigation--link" onClick={() => props.isMobilePhone && props.closeMenu()}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
