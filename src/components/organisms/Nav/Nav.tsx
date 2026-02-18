import { LOGO_TITLE } from "../../../constants";
import "./Nav.css";

const Nav = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Blog", link: "/blog" },
    { title: "Cosmetics Info", link: "/cosmetics" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      <h1>{LOGO_TITLE}</h1>
      <ul>
        {navLinks.map((link) => {
          return (
            <li>
              <a href={link.link}> {link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
