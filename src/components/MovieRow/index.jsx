import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import "./style.css";

const apiUrlImg = import.meta.env.VITE_API_IMG;

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let valueOfX = scrollX + Math.round(window.innerWidth / 2);

    if (valueOfX > 0) valueOfX = 0;

    setScrollX(valueOfX);
  };

  const handleRightArrow = () => {
    let valueOfX = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;

    if ((window.innerWidth - listWidth) > valueOfX) {
      valueOfX = (window.innerWidth - listWidth) - 60;
    }
    
    setScrollX(valueOfX);
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row-left" onClick={handleLeftArrow}>
        <MdOutlineArrowBackIos className="movie-row-left-icon" />
      </div>
      <div className="movie-row-right" onClick={handleRightArrow}>
        <MdOutlineArrowForwardIos className="movie-row-right-icon" />
      </div>

      <div className="movie-row-list-area">
        <div
          className="movie-row-list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movie-row-item">
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
