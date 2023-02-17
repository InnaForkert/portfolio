import { VscCircleLargeFilled } from "react-icons/vsc";
import styled from "styled-components";
import { Icon } from "./mixins.styled";
import { orange } from "../colors";
import { TiTickOutline, TiWeatherShower, TiWeatherSunny } from "react-icons/ti";
import { bite, upDown } from "./keyframes.styled";
import { RiSingleQuotesR } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { GiPlainCircle } from "react-icons/gi";

export const Recording = styled(VscCircleLargeFilled)`
  ${Icon};
  transition: color 2s cubic-bezier(0.03, 1.17, 0.13, 0.67), filter 2s;

  &:hover {
    -webkit-animation: 0;
  }

  .active & {
    color: ${orange};
  }
`;

export const Tick = styled(TiTickOutline)`
  ${Icon};
  transition: color 500ms cubic-bezier(0.03, 1.17, 0.13, 0.67), filter 2s;
  color: transparent;
  border: 4px solid black;

  &:hover {
    -webkit-animation: 0;
  }

  .active & {
    color: black;
  }
`;

export const Rain = styled(TiWeatherShower)`
  ${Icon};
  position: relative;
  left: 30px;
  transition: filter 2s, transform 1s, color 500ms;
  color: transparent;

  &:hover {
    -webkit-animation: 0;
  }

  .active & {
    color: black;
    animation: ${upDown} 4000ms ease-out infinite;
    animation-delay: 1000ms;
  }
`;

export const Sun = styled(TiWeatherSunny)`
  ${Icon};
  position: relative;
  left: -40px;
  transition: filter 2s, transform 1s, color 500ms;
  transform: translateX(0px);
  animation-delay: 1000ms;

  &:hover {
    -webkit-animation: 0;
  }

  .active & {
    transform: translateX(40px);
    color: transparent;
  }
`;

export const Quote = styled(RiSingleQuotesR)`
  ${Icon}
  transition: filter 2s, transform 1s cubic-bezier(0.88, 2, 0.26, 0.35),
    color 500ms;

  .active & {
    transform: rotate(180deg);
  }
`;

export const Apple = styled(AiFillApple)`
  ${Icon};

  .active & {
    animation: ${bite} 1500ms cubic-bezier(0.88, 2, 0.26, 0.35);
  }
`;
export const Circle = styled(GiPlainCircle)`
  ${Icon};
  position: relative;
  top: 20px;
  right: 39px;
  width: 33px;
  height: 35px;

  .active & {
    visibility: hidden;
  }
`;

export const Tag = styled.p`
  ${Icon}
  opacity: 0;
  font-size: 24px;

  &::before {
    content: "Hello World!";
  }

  .active & {
    opacity: 1;
  }
`;

export const Tag2 = styled.p`
  ${Icon}
  font-family: "Source Code Pro", monospace;
  position: absolute;

  &::before {
    content: "<p>Hello World!</p>";
  }

  .active & {
    opacity: 0;
  }
`;
