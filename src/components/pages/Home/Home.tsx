import { motion } from "framer-motion";
import "./Home.css";
import { homeVariants } from "../../../animations/transitions";
import Footer from "../../organisms/Footer/Footer";
import Nav from "../../organisms/Nav/Nav";

const Home = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-container"
    >
      <Nav />
      <section className="home-section">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          asperiores natus molestiae nesciunt ad. Odit quae dolorem fugiat
          repellat distinctio quis, facere quasi, veniam tenetur aperiam vero
          laudantium deleniti rerum sit blanditiis natus consectetur autem est
          iusto minus, numquam eius eveniet temporibus ipsum? Excepturi ullam
          iure omnis nihil dolores veritatis ratione pariatur modi, voluptas
          possimus aut blanditiis repudiandae itaque voluptatem libero est
          beatae assumenda! Neque non, obcaecati, veniam consequuntur aut magni
          consequatur illum, voluptatibus blanditiis nemo culpa molestias
          debitis. Dolore, illum quos vel sint labore placeat tempore. Quibusdam
          eos tempore cumque consequatur ipsa beatae temporibus nobis quaerat
          sunt quia excepturi molestias reiciendis rem earum provident natus,
          consectetur esse minus sapiente illo neque pariatur tenetur corporis
          aliquid? Laudantium perspiciatis officiis quis voluptatum nemo
          inventore error impedit corporis? Aliquid, velit vel sequi unde
          mollitia id voluptates ullam labore quod repellat illum corrupti rerum
          magni harum in eius, error dicta, officia deserunt iure dignissimos!
          Dolorum accusantium voluptate, harum asperiores consequuntur deleniti
          ab voluptatem! Odit deserunt natus voluptatem laboriosam temporibus
          asperiores doloribus pariatur id maxime libero, et aut beatae
          voluptate deleniti nihil ex quasi cum debitis doloremque quos expedita
          tenetur. Quibusdam, doloribus quo asperiores officia quisquam
          voluptate vel blanditiis placeat provident, in natus error.
        </p>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Home;
