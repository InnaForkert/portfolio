import {
  ProjectButton,
  ProjectDescription,
  ProjectName,
  ProjectTech,
} from "./Project.styled";

export function Project({
  project: { name, description, tech, link, git, ready },
}) {
  if (!ready) {
    return null;
  }
  return (
    <>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectTech>{tech}</ProjectTech>
      <ProjectButton href={link} target="_blank" rel="noreferrer">
        Visit Page
      </ProjectButton>
      <ProjectButton href={git} target="_blank" rel="noreferrer">
        See GitHub
      </ProjectButton>
    </>
  );
}
