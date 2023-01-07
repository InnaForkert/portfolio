import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
0% {
   background: repeating-linear-gradient(
    to left,
    #f34c19,
    #f34c19 16px,
    #434f71 16px,
    #434f71 32px
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
20% {
    background: repeating-linear-gradient(
    to left,
    #f34c19,
    #f34c19 8px,
    #434f71 8px,
    #434f71 16px
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  }
  40% {
     background: repeating-linear-gradient(
    to left,
    #434f71,
    #434f71 16px,
    #f34c19 16px,
    #f34c19 32px
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  }
  80% {
      background: repeating-linear-gradient(
    to left,
    #f34c19,
    #f34c19 8px,
    #434f71 8px,
    #434f71 16px
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  }
  100% {
    background: repeating-linear-gradient(
    to left,
    #f34c19,
    #f34c19 16px,
    #434f71 16px,
    #434f71 32px
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  }
`;

export const HeroHeading = styled.h1`
  color: transparent;
  animation: ${moveBackground} 4000ms linear infinite;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding-block: 80px;
  text-align: center;
`;
