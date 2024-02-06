import menuClose from "../../assets/images/icon-menu-close.svg";
import { navLinks } from "../js/navLinks";

export default function NavMobile({ setOpenNav, openNav }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 md:hidden"
        onClick={() => setOpenNav(!openNav)}
      ></div>
      <nav className="fixed inset-y-0 right-0 flex w-[60%] items-center bg-white px-6 py-8 md:hidden">
        <img
          src={menuClose}
          alt="menu close icon"
          className="absolute right-6 top-6 cursor-pointer bg-cover bg-center"
          onClick={() => setOpenNav(!openNav)}
        />
        <ul className="-mt-28 flex flex-col gap-5">
          {navLinks.map((link) => {
            return (
              <li className="" key={link.linkName}>
                <a
                  href={link.to}
                  className="text-veryDarkBlue hover:text-softRed"
                >
                  {link.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
