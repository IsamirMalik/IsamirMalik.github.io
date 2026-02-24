import "../styles/Skills.css";
import Card from "./Card";

export default function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-heading">
        <h2>Technical Skills</h2>
      </div>
      <p className="skills-description">
        My learning journey in web development has been full of ups and downs,
        each challenge teaching me something new. From struggling with my first
        lines of code to building real-world project and learning new frameworks
        and libraries. Till now i have acquired a solid foundation in the
        fundamentals of web development.
      </p>
      <div>
        <p className="skill-sub-heading">
          I have a strong foundation in the following technologies:
        </p>
        <div className="skills-container">
          <Card title="HTML" />
          <Card title="CSS" />
          <Card title="TailwindCss" />
          <Card title="JavaScript" />
          <Card title="React" />
          <Card title="React-icons" />
          <Card title="React-Router-Dom" />
          <Card title="React-chartjs-2" />
          <Card title="Redux" />
          <Card title="Redux-Toolkit" />
          <Card title="Nodejs" />
          <Card title="JWT" />
          <Card title="Mongoose" />
          <Card title="Express.js" />
          <Card title="Razorpay" />
          <Card title="cloudinary" />
          <Card title="MongoDB" />
        </div>
      </div>
      <div>
        <p className="skill-sub-heading tools">Tools i use:</p>
        <div className="skills-container">
          <Card title="Vscode" />
          <Card title="Postman" />
          <Card title="Git" />
          <Card title="GitHub" />
          <Card title="Canva" />
        </div>
      </div>
      <p className="skills-description">
        I believe growth comes from curiosity, persistence, and embracing
        change. That’s why I keep exploring new tools and ideas, always striving
        to become a better developer .
      </p>
    </div>
  );
}
