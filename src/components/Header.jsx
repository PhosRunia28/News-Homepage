import hamburger from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
export default function Header({ setOpenNav, openNav }) {
  return (
    <header className="flex items-center justify-between py-9 font-inter">
      <img src={logo} alt="logo" className="bg-cover bg-center" />
      <img
        src={hamburger}
        alt="menu"
        className="cursor-pointer bg-cover bg-center md:hidden"
        onClick={() => setOpenNav(!openNav)}
      />
      <NavDesktop />
      {openNav && <NavMobile setOpenNav={setOpenNav} openNav={openNav} />}
    </header>
  );
}
