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
                <ComicCard thumb={comic.thumb} series={comic.series} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
