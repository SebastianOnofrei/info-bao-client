import { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Footer from "./components/organisms/Footer/Footer";
import "./App.css";

const Home = lazy(() => import("./components/pages/Home/Home"));
const About = lazy(() => import("./components/pages/About/About"));
const Blog = lazy(() => import("./components/pages/Blog/Blog"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));
const Cosmetics = lazy(() => import("./components/pages/Cosmetics/Cosmetics"));
const Product = lazy(() => import("./components/pages/Product/Product"));

function App() {
  const location = useLocation();

  return (
    <main className="main-content">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
