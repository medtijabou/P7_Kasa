import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import Hogar from "./src/pages/Hogar.jsx";
import Error from "./src/pages/Error.jsx";
import Header from "./src/components/Header.jsx";
import Footer from "./src/components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Hogar />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
