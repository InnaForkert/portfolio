import { nanoid } from "nanoid";
import { Project } from "../Project/Project";
import { SectionHeader, SectionContainer } from "./Section.styled";

export function Section({ name, projects }) {
  return (
    <SectionContainer>
      <SectionHeader>{name}</SectionHeader>
      {projects.map((el) => (
        <Project project={el} key={nanoid()} />
      ))}
    </SectionContainer>
  );
}
