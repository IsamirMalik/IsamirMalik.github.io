const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About me</h2>

      <div className="container-center card">
        <img src={myImage} alt="myImage" className="myImage" />
        <p className="about-text">
          I am a curious and passionate learner who embraces new challenges with
          enthusiasm. I take responsibility seriously, ensuring reliability and
          commitment in everything I do. With a friendly and approachable
          nature, I enjoy building positive connections while continuously
          growing both personally and professionally.
        </p>
      </div>
    </section>
  );
};

export default About;