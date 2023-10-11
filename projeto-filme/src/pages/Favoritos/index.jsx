import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./index.module.css";

import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilme = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilme);

    localStorage.setItem("@primeflix", JSON.stringify(filtroFilme));
    toast.success("Filme excluído com sucesso!");
  }

  return (
    <div className={style.container}>
      <h1>Meus filmes</h1>

      {filmes.length === 0 && (
        <span>Voce não possui nenhum filme salvo :(</span>
      )}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
