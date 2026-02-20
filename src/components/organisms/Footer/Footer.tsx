import { FOOTER, LOGO_TITLE } from "../../../constants";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { title: "Instagram", link: "#" },
    { title: "Facebook", link: "#" },
    { title: "Twitter", link: "#" },
  ];

  const companyLinks = [
    {
      title: "Information",
      link: "/home",
    },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
    { title: "News", link: "/blog" },
  ];

  return (
    <footer>
      <div className="flex-container">
        <div>
          <h3>{FOOTER.COMPANY}</h3>
          <ul>
            {companyLinks.map((link) => {
              return (
                <li>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>{FOOTER.LOCATION}</h3>
          <p>{FOOTER.LOCATION_REGION}</p>
          <p>{FOOTER.PHONE_NUMBER}</p>
          <p className="punchline">{FOOTER.PUNCHLINE}</p>
        </div>
        <div>
          <h3>{FOOTER.GET_IN_TOUCH}</h3>
          <ul>
            {socialLinks.map((link) => {
              return (
                <li>
                  <a href={link.link} target="_blank">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <h3>{LOGO_TITLE}</h3>
        <p>{currentYear} &copy; All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
