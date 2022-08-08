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
        slug: "originals",
        title: "Originais do Netflix",
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
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`
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
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=27&language=pt-BR`
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
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?api_key=${apiKey}&with_genres=99&language=pt-BR`
        ),
      },
      ,
    ];
  },
};
