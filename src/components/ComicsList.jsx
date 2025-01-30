import ComicCard from "./ComicCard";
import comics from "../../data/comics";

export default function ComicsList() {
  return (
    <div className="container">
      <div className="products">
        <div className="row">
          {comics.map((comic) => {
            return (
              <div className="col" key={comic.id}>
                <ComicCard image={comic.thumb} title={comic.series} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
