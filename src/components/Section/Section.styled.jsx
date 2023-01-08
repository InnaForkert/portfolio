import styled from "styled-components";

export const SectionHeader = styled.h3`
  text-align: center;
  background: radial-gradient(#434f71 30%, #fbc40e, #fbc40e, #fbc40e);
  padding: 20px;
  border-radius: 50%;
  transition: color 250ms;
  width: 100%;

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
`;
