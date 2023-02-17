import { GiDumpling, GiIceCreamScoop } from "react-icons/gi";
import styled from "styled-components";
import { Icon } from "./mixins.styled";
import { IoIosIceCream, IoLogoOctocat } from "react-icons/io";
import { orange, white } from "../colors";
import { FcFilmReel } from "react-icons/fc";
import { upDown } from "./keyframes.styled";

export const Dumpling = styled(GiDumpling)`
  ${Icon}
  z-index: 1;

  &:hover {
    -webkit-animation: 0;
  }
`;

export const Cat = styled(IoLogoOctocat)`
  position: relative;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  transform: translateX(-140%) translateY(10px);
  transition: transform 2s;
  color: black;

  ${Dumpling}:hover + &,
  ${Dumpling}:focus + &,
  ${Dumpling}:active + & {
    transform: translateX(-140%) translateY(-25px);
  }
`;

export const Reel = styled(FcFilmReel)`
  ${Icon}
  transition: transform 120s linear;

  &:hover {
    -webkit-animation: 0;
    filter: none;
  }

  .active & {
    transform: rotate(-90000deg);
    filter: none;
    -webkit-animation: 0;
  }
`;

export const IceCream = styled(IoIosIceCream)`
  ${Icon}
  color: white;
`;

export const Spoon = styled(GiIceCreamScoop)`
  ${Icon};
  position: relative;
  top: -80px;
  left: -60px;
  width: 30px;
  height: 30px;
  z-index: -1;
  color: transparent;
  transition: top 500ms, color 500ms;

  &:hover {
    -webkit-animation: 0;
  }

  ${IceCream}:hover + &,
  .active & {
    top: -10px;
    color: black;
  }
`;

export const Butterflies = styled.img`
  position: absolute;
  opacity: 0;
  transition: opacity 500ms;
  cursor: pointer;
  animation: ${upDown} 4000ms ease-out infinite;

  .active & {
    opacity: 1;
  }
`;
export const ButterfliesStatic = styled.img`
  opacity: 1;
  transition: opacity 500ms;
  cursor: pointer;
  animation: ${upDown} 4000ms ease-out infinite;

  .active & {
    opacity: 0;
  }
`;
