import styled from "styled-components";
import { blue, orange } from "../utils/colors";

export const ContactsContainer = styled.div`
  max-width: 480px;
  padding-inline: 15px;
  padding-bottom: 40px;
`;

export const ContactsHeader = styled.h2`
  text-align: center;
  color: ${orange};
  margin-bottom: 15px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  svg {
    &:hover,
    &:focus {
      color: ${blue};
    }
  }
`;

export const CV = styled.p`
  text-decoration: underline;
  color: ${blue};
  text-align: center;
`;
