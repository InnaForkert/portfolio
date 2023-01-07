import { Section } from "../Section/Section";
import { nanoid } from "nanoid";
import { categories } from "../../data/projects";

export const Main = () => {
  const names = categories.map((el) => Object.keys(el)[0]);
  return (
    <div>
      {names.map((el, i) => (
        <Section name={el} projects={categories[i][el]} key={nanoid()} />
      ))}
    </div>
  );
};
