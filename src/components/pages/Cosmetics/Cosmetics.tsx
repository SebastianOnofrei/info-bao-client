import { motion } from "framer-motion";
import { cosmeticsVariants } from "../../../animations/transitions";
import Nav from "../../organisms/Nav/Nav";
import Footer from "../../organisms/Footer/Footer";
import { ABOUT } from "../../../constants";
import "./Cosmetics.css";

const Cosmetics = () => {
  return (
    <motion.div
      variants={cosmeticsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="cosmetics-container"
    >
      <Nav />
      <section className="cosmetics-section">
        <h3>{ABOUT.TITLE}</h3>
        <p>{ABOUT.DESCRIPTION}</p>
        <p>{ABOUT.LOVE}</p>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Cosmetics;
