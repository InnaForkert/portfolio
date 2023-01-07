import { HeaderContainer, Icon, Nav } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon>IF</Icon>
      <Nav>
        <li>Games</li>
        <li>SPA</li>
        <li>Landings</li>
      </Nav>
    </HeaderContainer>
  );
};
