import "./style.css";

const apiUrlImg = import.meta.env.VITE_API_IMG_ORIGINAL;

const FeaturedMovie = ({ item }) => {
  console.log(item);
  return (
    <section
      className="featured"
      style={{ backgroundImage: `url(${apiUrlImg}${item.backdrop_path})` }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">2099</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured-description">{item.overview}</div>
            <div className="featured-buttons">

            </div>
            <div className="featured-genres">
              <strong>Gêneros:</strong>
              {item.genres.map((item) => {
                console.log(item)
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
