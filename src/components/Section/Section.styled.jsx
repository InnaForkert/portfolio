import styled from "styled-components";

export const SectionHeader = styled.h3`
  text-align: center;
  background: radial-gradient(#434f71 30%, #fbc40e, #fbc40e, #fbc40e);
  padding: 20px;
  border-radius: 50%;
  transition: color 250ms;

  &:hover,
  &:focus {
    color: #f34c19;
  }
`;
