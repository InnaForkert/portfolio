import { nanoid } from "nanoid";
import { Project } from "../Project/Project";
import {
  SectionHeader,
  SectionContainer,
  ProjectsContainer,
} from "./Section.styled";

export function Section({ name, projects }) {
  return (
    <SectionContainer id="projects">
      <SectionHeader>{name}</SectionHeader>
      <ProjectsContainer>
        {projects.map((el) => (
          <Project project={el} key={nanoid()} />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
}
