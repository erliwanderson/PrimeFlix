import api from "../../services/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "6ad6ad40fd5b9b6e225116df8ff6e82e",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(10));
    }
    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

//movie/now_playing?
