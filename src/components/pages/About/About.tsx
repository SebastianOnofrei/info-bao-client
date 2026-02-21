import { ABOUT } from "../../../constants";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h3>{ABOUT.TITLE}</h3>
        <p>{ABOUT.DESCRIPTION}</p>
        <p>{ABOUT.LOVE}</p>
      </div>
    </div>
  );
};

export default About;
