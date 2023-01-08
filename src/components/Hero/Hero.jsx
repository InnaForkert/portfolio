import { HeroHeading, HeroContainer, HeroText } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroText>
        My name is Inna Forkert. I am a Full Stack developer from Ukraine.
      </HeroText>
      <HeroHeading>Nice to see you here!</HeroHeading>
    </HeroContainer>
  );
};
