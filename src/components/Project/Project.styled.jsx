import styled from "styled-components";
import { blue, orange, white } from "../utils/colors";

export const ProjectContainer = styled.div`
  margin-bottom: 15px;
`;

export const ProjectGrid = styled.div`
  display: flex;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`;

export const IconContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectName = styled.a`
  position: relative;
  display: inline-block;
  color: ${orange};
  font-weight: 300;
  font-size: 20px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    /* transform: translateX(-100%); */
    transform: translateX(0);
    content: "";
    background-color: ${orange};
    transition: transform 250ms;
  }

  &:hover&:after,
  &:focus&:after {
    transform: translateX(0);
  }
`;

export const ProjectDescription = styled.p`
  color: ${blue};
`;

export const ProjectTech = styled.p`
  color: ${blue};
  font-size: 14px;
  font-style: italic;
  margin-bottom: 15px;
`;

export const ProjectButton = styled.a`
  max-width: 150px;
  margin-bottom: 30px;
  color: ${blue};
  text-decoration: none;
  align-items: center;
  appearance: none;
  background-color: ${white};
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
