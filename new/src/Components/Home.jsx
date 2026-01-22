import image from "../assets/side-img.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div id="home" className="main-section">
      <div className="content">
        <p className="name">
          <span id="first-letter">S</span>
          <span className="letter">a</span>
          <span className="letter">m</span>
          <span className="letter">e</span>
          <span className="letter">e</span>
          <span className="letter" id="r">r</span>
           
          <span className="letter">M</span>
          <span className="letter">a</span>
          <span className="letter">l</span>
          <span className="letter">i</span>
          <span className="letter">k</span>
        </p>
        <p className="description"> A <span id="mern">MERN</span>  stack web developer. Seeking an opportunity to utilize my skills and abilities, in a value driven company that offers professional growth while being resourceful, innovative and flexible. Driving myself towards the development of cutting-edge technologies for future Indian technologic landscape.</p>
      </div>
      <div className="img-container">
        <img className="side-img" src={image} alt="" />
      </div>
    </div>
  );
}
