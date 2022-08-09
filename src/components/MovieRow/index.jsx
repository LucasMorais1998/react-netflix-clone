import "./style.css";

const apiUrlImg = import.meta.env.VITE_API_IMG;

const MovieRow = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow-listArea">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img
              key={key}
              src={`${apiUrlImg}${item.poster_path}`}
              alt={item.title}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieRow;
