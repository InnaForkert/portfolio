import { GrClose } from "react-icons/gr";
import styled, { keyframes } from "styled-components";
import { orange, white } from "./colors";
import { TbPlayCard } from "react-icons/tb";
import { VscCircleLargeFilled } from "react-icons/vsc";

const upDown = keyframes`
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

export const CrossIcon = styled(GrClose)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: transform 2s, filter 2s;
  animation: ${upDown} 4000ms linear infinite;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    transform: rotate(2000deg) scale(0.6);
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }
`;

export const CardIcon = styled(TbPlayCard)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  transform: rotateY(0);
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms linear infinite;
  transition: transform 500ms, filter 2s;
  &:hover {
    -webkit-animation: 0;
  }
  &:active,
  &:focus {
    transform: rotateY(180deg);
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }
`;

const recording = keyframes`
  0% {
    color: ${white};
  }
  50% {
    color: ${orange};
  }
  100% {
    color: ${white};
  }
`;

export const Recording = styled(VscCircleLargeFilled)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: color 2s cubic-bezier(0.03, 1.17, 0.13, 0.67), filter 2s;
  animation: ${upDown} 4000ms ease-out infinite;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    color: ${orange};
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }
`;
