import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
      <nav className="navigation">
        <NavLink to="work" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Work</NavLink>
        <NavLink to="about" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>About</NavLink>
        <NavLink to="contact" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Contact</NavLink>
      </nav>
  );
};

export default Navigation;
