import './style/index.scss'; 
import Banner from "./components/Banner";  
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;