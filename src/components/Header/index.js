import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./img/logo.png"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <img src={logo}/>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
            </nav>
        </header>
    )
}

export default Header;
