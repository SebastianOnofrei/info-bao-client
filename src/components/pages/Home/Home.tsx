import { motion } from "framer-motion";
import "./Home.css";
import { homeVariants } from "../../../animations/transitions";
import Footer from "../../organisms/Footer/Footer";
import Nav from "../../organisms/Nav/Nav";
import heroImg from "../../../assets/home.png";
import homeAboutImg from "../../../assets/about-home.png";

const Home = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-container"
    >
      <div className=""></div>

      <section className="hero">
        <img src={heroImg} alt="Hero Background" className="hero-img" />

        <div className="nav-container">
          <Nav />
        </div>

        <div className="hero-content">
          <h1>About Cosmetics</h1>
          <p>Learn more about other cosmetics with INFO BAO.</p>
          <button>More info</button>
        </div>
      </section>

      <section className="hero-about-section">
        <h2>About Us</h2>
        <div className="hero-about-content">
          <div>
            <h3>start new info</h3>
            <p>
              When you want buy new cosmetics you need know about this
              cosmetics. This site help you find cosmetics what you want. We can
              help you to get acquainted with cosmetics. And you can find
              information about skin problem for teenager, adult and elder
              woman. We tell you about face skin cosmetics, hair cosmetics,
              cosmetics for makeup. We have got three sections: Korean
              cosmetics, American cosmetics, Europian cosmetics.
            </p>

            <p>
              We talk about brands: CHI(American hair cosmetics), Some by
              mi(Korean face cosmetics), La Roche-Posay(French face cosmetics)
              and other brands. We take cosmetics different price. Because not
              all can buy expensive cosmetics but all women want look beautiful.
              That's why we start this project! All women can buy cosmetics!
            </p>
          </div>
          <img src={homeAboutImg} alt="home About us image" />
        </div>
        <button>More</button>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Home;
