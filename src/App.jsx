
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx";
import Hogar from "./pages/Hogar.jsx";
import Error from "./pages/Error.jsx";
import Header from "./components/Header.jsx";

import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Hogar />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App; 
