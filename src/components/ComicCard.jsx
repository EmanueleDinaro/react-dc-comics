export default function ComicCard({ thumb, title }) {
  return (
    <div className="card">
      <img src={thumb} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
