import "../styles/GitHub.css";

export default function GitHub() {
  return (
    <section id="github" className="github-section">
      <div className="github-header">
        <h2>GitHub Stats</h2>
      </div>
      <div className="github-stats">
        <img
          src="https://github-readme-stats.vercel.app/api?username=IsamirMalik&theme=shades-of-purple&show_icons=true&hide_border=true&count_private=true"
          alt="IsamirMalik's GitHub Stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=IsamirMalik&theme=shades-of-purple&show_icons=true&hide_border=true&layout=compact"
          alt="IsamirMalik's GitHub Stats"
        />
      </div>
    </section>
  );
}
