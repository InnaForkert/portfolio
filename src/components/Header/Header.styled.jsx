import styled from "styled-components";

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

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #343F71;

  z-index: 1;
  `;

export const Icon = styled.h2`
  color: #f34c19;
  cursor: pointer;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 15px;
  cursor: pointer;

  li {
    transition: color 250ms;

    &:hover,
    &:focus {
      color: #f34c19;
    }
  }
`;
