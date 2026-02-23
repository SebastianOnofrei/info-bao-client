import { motion } from "framer-motion";
import "./Contact.css";
import { contactVariants } from "../../../animations/transitions";
import Nav from "../../organisms/Nav/Nav";
import Footer from "../../organisms/Footer/Footer";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Nav />

      <section className="contact-section">
        <h3>CONTACT</h3>
        <p>Phone number: +1234567890 </p>
        <p>Email: infobao-contact@gmail.com</p>
        <p>Location: South Los Angeles </p>
        <p>Language: Russian, English, Ukrainian, Spanish.</p>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Contact;
