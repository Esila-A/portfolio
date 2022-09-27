import ComputerNav from "./computerNav";
import MobileNav from "./mobileNav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="work" className="header_logo">EA | Front-End Developer</NavLink>
      <MobileNav />
      <ComputerNav />
    </div>
  );
};

export default Header;
