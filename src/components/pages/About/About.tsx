import { aboutVariants } from "../../../animations/transitions";
import { ABOUT } from "../../../constants";
import Footer from "../../organisms/Footer/Footer";
import Nav from "../../organisms/Nav/Nav";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      variants={aboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about-container"
    >
      <Nav />
      <section className="about-section">
        <h3>{ABOUT.TITLE}</h3>
        <p>{ABOUT.DESCRIPTION}</p>
        <p>{ABOUT.LOVE}</p>
      </section>
      <Footer />
    </motion.div>
  );
};

export default About;
