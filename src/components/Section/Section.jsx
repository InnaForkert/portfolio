import { nanoid } from "nanoid";
import { Project } from "../Project/Project";

export function Section({ name, projects }) {
  return (
    <>
      <h2>{name}</h2>
      {projects.map((el) => (
        <Project project={el} key={nanoid()} />
      ))}
    </>
  );
}
