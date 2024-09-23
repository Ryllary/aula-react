import erro404 from './erro404.png';
import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageNotFound() {
    return (
        <div id="root">
            <Header />
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={erro404} alt="Logo de Página não localizada" />
            </section>
            <Footer />
        </div>
    );
}

export default PageNotFound;
