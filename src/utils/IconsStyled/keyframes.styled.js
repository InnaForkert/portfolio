import { keyframes } from "styled-components";
import { orange, white } from "../colors";

export const upDown = keyframes`
  0% {
    transform: translateY(0);
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  }
  50% {
    transform: translateY(7px);
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }
  100% {
    transform: translateY(0);
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  }
`;

export const bite = keyframes`
   0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const monster = keyframes`
  50% {
   transform: rotate(30deg) translate(60px, 20px) skew(-20deg, 20deg);
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(2px 8px 6px ${orange});
  }
`;
