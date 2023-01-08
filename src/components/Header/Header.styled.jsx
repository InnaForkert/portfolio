import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%
  max-width: 480px;
  padding-inline: 15px;
  margin: 0 auto;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #343F71;

  z-index: 1;

  @media (min-width: 768px) {
    padding-inline: 30px;
  }

  @media (min-width: 1200px) {
    padding-inline: 45px;
  }
  `;

export const Icon = styled.h2`
  color: #f34c19;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const NavLink = styled(Link)``;

export const Nav = styled.ul`
  display: flex;
  gap: 15px;
  cursor: pointer;

  ${NavLink} {
    transition: color 250ms;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    &:hover,
    &:focus {
      color: #f34c19;
    }
  }
`;
