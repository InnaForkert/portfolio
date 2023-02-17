import { css } from "styled-components";
import { orange, white } from "../colors";
import { upDown } from "./keyframes.styled";

export const Icon = css`
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  color: black;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  animation: ${upDown} 4000ms linear infinite;
`;
