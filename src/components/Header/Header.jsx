import { HeaderContainer, Icon, Nav } from "./Header.styled";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon>IF</Icon>
      <Nav>
        <Link to="home" smooth={true}>
          Home
        </Link>
        <Link to="projects" smooth={true}>
          Projects
        </Link>
        <Link to="contacts" smooth={true}>
          Contacts
        </Link>
      </Nav>
    </HeaderContainer>
  );
};
