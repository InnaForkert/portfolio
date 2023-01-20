import { orange, white } from "./colors";
import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
import { TbPlayCard } from "react-icons/tb";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiTickOutline, TiWeatherShower, TiWeatherSunny } from "react-icons/ti";
import { RiSingleQuotesR } from "react-icons/ri";
import { GiDumpling, GiIceCreamScoop } from "react-icons/gi";
import { IoLogoOctocat, IoIosIceCream } from "react-icons/io";
import { FcFilmReel } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { GiPlainCircle } from "react-icons/gi";
// import { ImFire } from "react-icons/im";

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
// const upDownNoShadow = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(7px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

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
  color: black;
  animation: ${upDown} 4000ms linear infinite;
  transition: transform 500ms, filter 2s;
  &:hover {
    -webkit-animation: 0;
  }
  .active & {
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
  color: black;

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
  border: 4px solid black;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    color: black;
  }
`;

export const Rain = styled(TiWeatherShower)`
  position: relative;
  left: 30px;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 4px 3px ${orange});
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  transition: filter 2s, transform 1s, color 500ms;

  color: transparent;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});
  }

  .active & {
    color: black;
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
  color: black;
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
  color: black;

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
    -webkit-animation: 0;
  }
`;

export const IceCream = styled(IoIosIceCream)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms ease-out infinite;
`;

export const Spoon = styled(GiIceCreamScoop)`
  position: relative;
  top: -80px;
  left: -60px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms ease-out infinite;
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

const bite = keyframes`
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

export const Apple = styled(AiFillApple)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  user-select: none;
  color: black;
  filter: drop-shadow(1px 1px 1px ${white}) drop-shadow(1px 1px 2px ${orange});

  .active & {
    animation: ${bite} 1500ms cubic-bezier(0.88, 2, 0.26, 0.35);
  }
`;
export const Circle = styled(GiPlainCircle)`
  position: relative;
  top: 20px;
  right: 39px;
  width: 33px;
  height: 35px;
  cursor: pointer;
  user-select: none;
  color: black;

  .active & {
    visibility: hidden;
  }
`;

// export const Fire = styled(ImFire)`
//   width: 10px;
//   height: 10px;
//   cursor: pointer;
//   user-select: none;
//   color: black;
//   transition: transform 20s;
//   z-index: 1;
//   cursor: zoom-in;
//   .active & {
//     transform: scale(200);
//     cursor: zoom-out;
//   }
// `;

export const Tag = styled.p`
  height: 70px;
  cursor: pointer;
  user-select: none;
  color: black;
  animation: ${upDown} 4000ms ease-out infinite;
  opacity: 0;
  font-size: 24px;

  &::before {
    content: "Hello World!"
  }

    .active & {
    opacity: 1;
  }
  `;
  
export const Tag2 = styled.p`
  height: 70px;
  cursor: pointer;
  user-select: none;
  animation: ${upDown} 4000ms ease-out infinite;
  color: black;
  font-family: 'Source Code Pro', monospace;
  position: absolute;
  
  &::before {
    content: "<p>Hello World!</p>";
  }

  .active & {
    opacity: 0;
  }
  `;

export const Butterflies = styled.img`
  position: absolute;
  opacity: 0;
  transition: opacity 500ms;
  cursor: pointer;
  .active & {
    opacity: 1;
  }
`;
export const ButterfliesStatic = styled.img`
  opacity: 1;
  transition: opacity 500ms;
  cursor: pointer;

  .active & {
    opacity: 0;
  }
`;
