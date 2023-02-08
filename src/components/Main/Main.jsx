import { Section } from "../Section/Section";
import { nanoid } from "nanoid";
import { categories } from "../../data/projects";
import { useState } from "react";
import { Button } from "./Main.styled";

export const Main = () => {
  const names = categories.map((el) => Object.keys(el)[0]);
  const [showInProgress, setShowInProgress] = useState(false);

  function showAll() {
    setShowInProgress((prev) => !prev);
  }

  return (
    <div>
      <Button onClick={showAll}>
        {showInProgress
          ? "Hide Unfinished Projects"
          : "Show Unfinished Projects"}
      </Button>
      {names.map((el, i) => (
        <Section
          name={el}
          projects={categories[i][el]}
          show={showInProgress}
          key={nanoid()}
        />
      ))}
    </div>
  );
};
