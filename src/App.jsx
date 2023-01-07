import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Hero />
      <Main />
      <Footer />
      <Header />
    </>
  );
}

export default App;
