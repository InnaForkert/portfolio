import { nanoid } from "nanoid";
import { Project } from "../Project/Project";
import { SectionHeader } from "./Section.styled";

export function Section({ name, projects }) {
  return (
    <>
      <SectionHeader>{name}</SectionHeader>
      {projects.map((el) => (
        <Project project={el} key={nanoid()} />
      ))}
    </>
  );
}
