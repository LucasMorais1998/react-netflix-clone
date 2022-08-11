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
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow-left" onClick={handleLeftArrow}>
        <MdOutlineArrowBackIos className="movieRow-left-icon" />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <MdOutlineArrowForwardIos className="movieRow-right-icon" />
      </div>

      <div className="movieRow-listArea">
        <div
          className="movieRow-list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
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
