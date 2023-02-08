import { nanoid } from "nanoid";
import { Project } from "../Project/Project";
import {
  SectionHeader,
  SectionContainer,
  ProjectsContainer,
} from "./Section.styled";

export function Section({ name, projects, show }) {
  return (
    <SectionContainer id="projects">
      <SectionHeader>{name}</SectionHeader>
      <ProjectsContainer>
        {show
          ? projects.map((el) => <Project project={el} key={nanoid()} />)
          : projects
              .filter((el) => el.ready)
              .map((el) => <Project project={el} key={nanoid()} />)}
      </ProjectsContainer>
    </SectionContainer>
  );
}
