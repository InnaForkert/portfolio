import { useState } from "react";
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
  project: { name, description, tech, link, git, ready, icon, icon2 },
}) {
  const [isActive, setIsActive] = useState(false);

  function setActive() {
    setIsActive((prev) => !prev);
  }

  if (!ready) {
    return null;
  }
  return (
    <ProjectGrid>
      <ProjectContainer>
        <ProjectName target="_blank" rel="noreferrer" href={link}>
          {name}
        </ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTech>{tech}</ProjectTech>
        <ProjectButton href={git} target="_blank" rel="noreferrer">
          See GitHub
        </ProjectButton>
      </ProjectContainer>
      <IconContainer
        onClick={setActive}
        className={`${isActive ? "active" : ""}`}
      >
        {icon} {icon2 ?? ""}
      </IconContainer>
    </ProjectGrid>
  );
}
