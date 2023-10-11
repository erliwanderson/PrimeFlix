import { Link } from "react-router-dom";
import style from "./index.module.css";

function Erro() {
  return (
    <div className={style.notFound}>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Página home</Link>
    </div>
  );
}

export default Erro;
