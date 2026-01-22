import "../styles/Card.css";
export default function Card({ title }) {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
}