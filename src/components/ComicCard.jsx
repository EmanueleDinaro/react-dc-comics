export default function ComicCard({ thumb, series }) {
  return (
    <div className="col">
      <img src={thumb} alt={series} />
      <h3>{series}</h3>
    </div>
  );
}
