import { useState, useEffect } from "react";
import api from "../../api";

import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();

      setMovieList(list);

      let originals = list.filter((item) => item.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );

      let chosen = originals[0].items.results[randomChosen]
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default Home;
