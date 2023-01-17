import { useState } from "react";
import {
  ProjectButton,
  ProjectDescription,
  ProjectName,
  ProjectTech,
  ProjectContainer,
  ProjectGrid,
  IconContainer,
  UnderConstruction,
} from "./Project.styled";
import notReady from "../../img/notReady.gif";

export function Project({
  project: { name, description, tech, link, git, ready, icon, icon2 },
}) {
  const [isActive, setIsActive] = useState(false);

  function setActive() {
    setIsActive((prev) => !prev);
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
        {ready ? (
          <>
            {icon} {icon2 ?? ""}
          </>
        ) : (
          <UnderConstruction src={notReady} alt="under construction" />
        )}
        {/* {icon} {icon2 ?? ""} */}
      </IconContainer>
    </ProjectGrid>
  );
}
