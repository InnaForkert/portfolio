import {
  ProjectButton,
  ProjectDescription,
  ProjectName,
  ProjectTech,
  ProjectContainer,
  ProjectGrid,
  IconContainer,
} from "./Project.styled";

export function Project({
  project: { name, description, tech, link, git, ready, icon },
}) {
  if (!ready) {
    return null;
  }
  return (
    <>
      <ProjectGrid>
        <ProjectContainer>
          <ProjectName target="_blank" rel="noreferrer" href={link}>
            {name}
          </ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectTech>{tech}</ProjectTech>
        </ProjectContainer>
        <IconContainer>{icon}</IconContainer>
      </ProjectGrid>
      <ProjectButton href={git} target="_blank" rel="noreferrer">
        See GitHub
      </ProjectButton>
    </>
  );
}
