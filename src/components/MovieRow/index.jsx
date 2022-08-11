import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import "./style.css";

const apiUrlImg = import.meta.env.VITE_API_IMG;

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow-left">
        <MdOutlineArrowBackIos className="movieRow-left-icon"/>
      </div>
      <div className="movieRow-right">
        <MdOutlineArrowForwardIos className="movieRow-right-icon"/>
      </div>

      <div className="movieRow-listArea">
        <div className="movieRow-list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow-item">
                <img
                  key={key}
                  src={`${apiUrlImg}${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
      
    </div>
  );
};

export default MovieRow;
