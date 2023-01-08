import {
  CV,
  ContactsContainer,
  ContactsHeader,
  Icons,
} from "./Contacts.styled";
import { BsTelegram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail, SiCodewars } from "react-icons/si";
import cv from "../Contacts/cv.pdf";

export function Contacts() {
  const iconSize =
    window.innerWidth < 480
      ? 30
      : window.innerWidth < 768
      ? 45
      : window.innerWidth < 1200
      ? 50
      : 60;
  return (
    <ContactsContainer id="contacts">
      <ContactsHeader>Contacts</ContactsHeader>
      <Icons>
        <a href="https://t.me/inna_forkert" target="_blank" rel="noreferrer">
          <BsTelegram size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/in/inna-forkert/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={iconSize} />
        </a>
        <a
          href="mailto:inna.forkert@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail size={iconSize} />
        </a>
        <a
          href="https://github.com/InnaForkert"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={iconSize} />
        </a>
        <a
          href="https://www.codewars.com/users/InnaForkert"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodewars size={iconSize} />
        </a>
      </Icons>
      <CV href={cv} target="_blank" rel="noreferrer">
        Have a look at my CV😊
      </CV>
    </ContactsContainer>
  );
}
