import { orange, white } from "./colors";
import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
import { TbPlayCard } from "react-icons/tb";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiTickOutline, TiWeatherShower, TiWeatherSunny } from "react-icons/ti";
import { RiSingleQuotesR } from "react-icons/ri";
import { GiDumpling, GiFilmSpool } from "react-icons/gi";
import { IoLogoOctocat } from "react-icons/io";
import { FcFilmReel } from "react-icons/fc";

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
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    color: ${orange};
  }
`;

export const Tick = styled(TiTickOutline)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: color 500ms cubic-bezier(0.03, 1.17, 0.13, 0.67), filter 2s;
  animation: ${upDown} 4000ms ease-out infinite;

  color: transparent;
  border: 4px solid ${white};

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    color: ${white};
  }
`;

export const Rain = styled(TiWeatherShower)`
  position: relative;

  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: filter 2s, transform 1s, color 500ms;

  transform: translateX(40px);
  color: transparent;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    left: 30px;
    transform: translateX(0px);
    color: ${white};
    animation: ${upDown} 4000ms ease-out infinite;
    animation-delay: 1000ms;
  }
`;

export const Sun = styled(TiWeatherSunny)`
  position: relative;
  left: -40px;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: filter 2s, transform 1s, color 500ms;
  transform: translateX(0px);
  color: ${white};
  animation: ${upDown} 4000ms ease-out infinite;
  animation-delay: 1000ms;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    transform: translateX(40px);
    color: transparent;
  }
`;

export const Quote = styled(RiSingleQuotesR)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: filter 2s, transform 1s cubic-bezier(0.88, 2, 0.26, 0.35),
    color 500ms;
  color: ${white};

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    transform: rotate(180deg);
    -webkit-animation: 0;
  }
`;

export const Dumpling = styled(GiDumpling)`
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms ease-out infinite;
  z-index: 1;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }
`;

export const Cat = styled(IoLogoOctocat)`
  position: relative;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  transform: translateX(-140%);
  transition: transform 2s;

  ${Dumpling}:hover + &,
  ${Dumpling}:focus + &,
  ${Dumpling}:active + & {
    transform: translateX(-140%) translateY(-40px);
  }
`;

export const Reel = styled(FcFilmReel)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms ease-out infinite;
  transition: transform 120s linear;

  &:hover {
    -webkit-animation: 0;
  }

  .active & {
    transform: rotate(-90000deg);
    filter: none;
  }
`;
