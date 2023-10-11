import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import style from "./index.module.css";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "6ad6ad40fd5b9b6e225116df8ff6e82e",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();
  }, [id, navigate]);

  function save() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      alert("Este filme já foi salvo!");
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className={style.filmeInfo}>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className={style.filmeInfo}>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average}</strong>

      <div className={style.areaBtn}>
        <button onClick={save}>Salvar</button>
        <button>
          <a
            rel="external"
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
