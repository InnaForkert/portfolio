import { HeaderContainer, Icon, Nav, NavLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        IF
      </Icon>
      <Nav>
        <NavLink to="home" smooth={true}>
          Home
        </NavLink>
        <NavLink to="projects" smooth={true}>
          Projects
        </NavLink>
        <NavLink to="contacts" smooth={true}>
          Contacts
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};
