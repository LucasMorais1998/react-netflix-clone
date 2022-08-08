import { useEffect } from "react";
import api from "./api";

import "./App.css";

const App = () => {
  useEffect(() => {

    const loadAll = async () => {
      let list = await api.getHomeList();
      
      console.log(list);
    };

    loadAll();
  }, []);

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>

    </div>
  );
};

export default App;
