const apiKey = import.meta.env.VITE_API_KEY;
const apiBase = import.meta.env.VITE_API_BASE;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${apiBase}${endpoint}`);
  const json = await req.json();

  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        slug: "originals",
        title: "Só na Netflix",
        items: await basicFetch(
          `/discover/tv?api_key=${apiKey}&with_networks=213&language=pt-BR`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?api_key=${apiKey}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`
        ),
      },
      {
        slug: "animation",
        title: "Animação",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=16&language=pt-BR`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=35&language=pt-BR`
        ),
      },
      {
        slug: "crime",
        title: "Crime",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=80&language=pt-BR`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=99&language=pt-BR`
        ),
      },
      {
        slug: "fantasy",
        title: "Fantasia",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=14&language=pt-BR`
        ),
      },
      {
        slug: "history",
        title: "História",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=36&language=pt-BR`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=27&language=pt-BR`
        ),
      },
      {
        slug: "mystery",
        title: "Mistério",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=9648&language=pt-BR`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=10749&language=pt-BR`
        ),
      },
      {
        slug: "science fiction",
        title: "Ficção Científica",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=878&language=pt-BR`
        ),
      },
      {
        slug: "thriller",
        title: "Thriller",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=53&language=pt-BR`
        ),
      },
      {
        slug: "war",
        title: "Guerra",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=10752&language=pt-BR`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
          );
          break;

        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?api_key=${apiKey}&language=pt-BR`
          );
          break;
      }
    }

    return info;
  },
};
