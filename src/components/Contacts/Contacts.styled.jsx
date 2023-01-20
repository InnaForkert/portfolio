import styled from "styled-components";
import { blue, orange } from "../../utils/colors";

export const ContactsContainer = styled.div`
  max-width: 480px;
  padding-inline: 15px;
  padding-bottom: 40px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-inline: 30px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding-inline: 40px;
  }
`;

export const ContactsHeader = styled.h2`
  text-align: center;
  color: ${orange};
  margin-bottom: 15px;
  cursor: default;

  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 36px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1200px) {
    gap: 40px;
  }

  svg {
    &:hover,
    &:focus {
      color: ${blue};
    }
  }
`;

export const CV = styled.a`
  display: inline-block;
  text-decoration: underline;
  color: ${blue};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;
