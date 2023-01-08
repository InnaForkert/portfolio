import styled from "styled-components";

export const SectionHeader = styled.h3`
  text-align: center;
  background: radial-gradient(#434f71 30%, #fbc40e, #fbc40e, #fbc40e);
  padding: 20px;
  border-radius: 50%;
  transition: color 250ms;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 30px;
    padding: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
    padding: 40px;
  }

  &:hover,
  &:focus {
    color: #f34c19;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding-inline: 20px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 768px;
    padding-inline: 40px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding-inline: 60px;
  }
`;

export const ProjectsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
