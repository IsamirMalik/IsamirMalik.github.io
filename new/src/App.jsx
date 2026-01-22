import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import GitHub from "./Components/GitHub";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Footer />
    </div>
  );
}

export default App;
