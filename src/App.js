import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Documentário</h2>
        Lista de Card
      </Container>
      <Footer />
    </>
  );
}

export default App;