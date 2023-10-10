import style from "./index.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className={style.logo} to="/">
        Prime Flix
      </Link>
      <Link className={style.favoritos} to="/favoritos">
        Meus filmes
      </Link>
    </header>
  );
}

export default Header;
