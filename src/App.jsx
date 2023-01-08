import "./App.css";
import { Contacts } from "./components/Contacts/Contacts";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Hero />
      <Main />
      <Contacts />
      <Header />
    </>
  );
}

export default App;
