import { navLinks } from "../js/navLinks";
export default function NavDesktop() {
  return (
    <ul className="hidden gap-10 md:flex">
      {navLinks.map((link) => {
        return (
          <li key={link.linkName}>
            <a
              href={link.to}
              className="font-semibold text-darkGrayishBlue/70 hover:text-softRed"
            >
              {link.linkName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
