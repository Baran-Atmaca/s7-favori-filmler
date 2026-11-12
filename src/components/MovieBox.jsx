import { Link } from "react-router-dom";
export default function MovieBox(props) {
  const { id, title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
    <Link to={`/filmler/${id}`}>
    <h3>{title}</h3>
    <p>
      <strong>Director:</strong> {director}
    </p>
    <p>
      <strong>Metascore:</strong> {metascore}
    </p>
    </Link>
</div>
  );
}
