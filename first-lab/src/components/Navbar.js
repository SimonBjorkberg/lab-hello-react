import logo from "../images/logo.png";
import hamburger from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-700 p-5">
      <div className="flex justify-between w-[95%] mx-auto">
        <img src={logo} alt="" />
        <img src={hamburger} alt="" className="w-7 h-3 self-center" />
      </div>
    </div>
  );
};

export default Navbar;
