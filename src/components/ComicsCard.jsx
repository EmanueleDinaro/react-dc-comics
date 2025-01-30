export default function ProductCard({ thumb, series }) {
  return (
    <div className="comics-card">
      <img src={thumb} alt={series} />
      <h3>{series}</h3>
    </div>
  );
}
