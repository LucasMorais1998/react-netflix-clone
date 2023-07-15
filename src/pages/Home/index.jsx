import { useEffect, useState } from 'react';
import api from '../../services/api';

import netflixGif from '../../assets/images/netflix-logo-gif.gif';

import FeaturedMovie from '../../components/FeaturedMovie';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MovieRow from '../../components/MovieRow';

import './style.css';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [isBlackHeader, setIsBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();

      setMovieList(list);

      let originals = list.filter(item => item.slug === 'originals');

      let randomChosen = Math.floor(Math.random() * originals[0].items.results.length - 1);

      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      return window.scrollY > 10 ? setIsBlackHeader(true) : setIsBlackHeader(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header isBlackHeader={isBlackHeader} />

      {featuredData ? (
        <FeaturedMovie item={featuredData} />
      ) : (
        <div className="loading">
          <img src={netflixGif} alt="Netflix Gif" />
        </div>
      )}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
