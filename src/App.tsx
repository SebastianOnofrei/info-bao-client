import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home/Home"));
const About = lazy(() => import("./components/pages/About/About"));
const Blog = lazy(() => import("./components/pages/Blog/Blog"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));
const Cosmetics = lazy(() => import("./components/pages/Cosmetics/Cosmetics"));
const Product = lazy(() => import("./components/pages/Product/Product"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
