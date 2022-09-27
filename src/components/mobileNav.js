import Navigation from "./navigation";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNav = () => {
  const [icon, setIcon] = useState(false);

  const openIcon = <FiMenu className="icon" onClick={() => setIcon(!icon)} />;

  const closeIcon = (
    <IoMdClose className="icon icon--close" onClick={() => setIcon(!icon)} />
  );

  const closeMenu = () => setIcon(false);

  return (
    <div className="mobileNavigation">
      {icon ? closeIcon : openIcon}
      {icon && <Navigation isMobilePhone={true} closeMenu={closeMenu} />}
    </div>
  );
};

export default MobileNav;
