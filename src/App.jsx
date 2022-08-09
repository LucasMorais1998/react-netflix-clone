import { useState, useEffect } from "react";
import api from "./api";

import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();

      setMovieList(list);
      console.log(movieList)
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      Header
      Destaque
      Listas
      Rodapé
    </div>
  );
};

export default App;
