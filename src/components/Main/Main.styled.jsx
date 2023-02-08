import styled from "styled-components";
import { blue, white } from "../../utils/colors";

export const Button = styled.button`
  background-color: ${blue};
  color: ${white};
  padding: 10px 15px;
  font-family: "Yeon Sung", cursive;
  font-size: 18px;
  border-radius: 30px;
  border: none;
  margin-inline: auto;
  display: block;
  margin-bottom: 15px;
  outline: none;
  box-shadow: 2px 2px 4px black;
  cursor: pointer;
  width: 240px;
  transition: box-shadow 200ms, transform 200ms;

  &:hover {
    box-shadow: 1px 1px 1px black;
    transform: translateY(2px);
  }
`;
