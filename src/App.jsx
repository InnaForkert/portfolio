import "./App.css";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Hero />
      <Main />
      <Contacts />
      <Footer />
      <Header />
    </>
  );
}

export default App;
