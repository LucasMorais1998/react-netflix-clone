import { BiPlay, BiPlus } from "react-icons/bi";

import "./style.css";

const apiUrlImg = import.meta.env.VITE_API_IMG_ORIGINAL;

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{ backgroundImage: `url(${apiUrlImg}${item.backdrop_path})` }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average.toFixed(1)} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured-description">{item.overview}</div>
            <div className="featured-buttons">
              <a href={`/watch/${item.id}`} className="featured-watch-button">
                <BiPlay className="featured-watch-button-icon" /> Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className="featured-mylist-button"
              >
                <BiPlus className="featured-mylist-button-icon" /> Minha Lista
              </a>
            </div>
            <div className="featured-genres">
              <strong>Gêneros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
