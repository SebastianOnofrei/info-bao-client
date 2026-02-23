import "./Blog.css";

import bodylotion from "../../../assets/bodylotion.png";
import bodyoil from "../../../assets/bodyoil.png";
import bodyscrab from "../../../assets/bodyscrab.png";

import cleanser from "../../../assets/cleanser.png";
import eyepatches from "../../../assets/eyepatches.png";
import mask from "../../../assets/mask.png";

import hairbrush from "../../../assets/hairbrush.png";
import hairstyling from "../../../assets/hairstyling.png";
import splitends from "../../../assets/splitends.png";
import { blogVariants } from "../../../animations/transitions";
import { motion } from "framer-motion";
import Nav from "../../organisms/Nav/Nav";
import Footer from "../../organisms/Footer/Footer";

const Blog = () => {
  const faceBlogs = [
    {
      imgUrl: cleanser,
      title: "Cleansers",
    },
    {
      imgUrl: eyepatches,
      title: "Eye Patches",
    },
    {
      imgUrl: mask,
      title: "Masks",
    },
  ];

  const bodyBlogs = [
    {
      imgUrl: bodyscrab,
      title: "Body Scrab",
    },
    {
      imgUrl: bodylotion,
      title: "Body Lotion",
    },
    {
      imgUrl: bodyoil,
      title: "Body Oil",
    },
  ];

  const hairBlogs = [
    {
      imgUrl: hairbrush,
      title: "Hairbrush",
    },
    {
      imgUrl: hairstyling,
      title: "Hair Styling",
    },
    {
      imgUrl: splitends,
      title: "Split Ends",
    },
  ];

  return (
    <motion.div
      variants={blogVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="blogs-container"
    >
      <Nav />
      <section className="blogs-section">
        <h3>Blogs</h3>
        <div className="category-container">
          <h3>Face</h3>
          <div className="blogs-flex-container">
            {faceBlogs.map((blog) => {
              return (
                <div>
                  <span>{blog.title}</span>
                  <img src={blog.imgUrl} alt="" />
                  <a>More</a>
                </div>
              );
            })}
          </div>
          <button>More</button>
        </div>
        <div className="category-container">
          <h3>Body</h3>
          <div className="blogs-flex-container">
            {bodyBlogs.map((blog) => {
              return (
                <div>
                  <span>{blog.title}</span>
                  <img src={blog.imgUrl} alt="" />

                  <a>More</a>
                </div>
              );
            })}
          </div>
          <button>More</button>
        </div>
        <div className="category-container">
          <h3>Hair</h3>
          <div className="blogs-flex-container">
            {hairBlogs.map((blog) => {
              return (
                <div>
                  <span>{blog.title}</span>
                  <img src={blog.imgUrl} alt={blog.title} />
                  <a>More</a>
                </div>
              );
            })}
          </div>
          <button>More</button>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Blog;
