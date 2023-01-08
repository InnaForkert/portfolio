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
  return (
    <ContactsContainer id="contacts">
      <ContactsHeader>Contacts</ContactsHeader>
      <Icons>
        {" "}
        <a href="https://t.me/inna_forkert" target="_blank" rel="noreferrer">
          <BsTelegram size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/inna-forkert/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          href="mailto:inna.forkert@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail size={30} />
        </a>
        <a
          href="https://github.com/InnaForkert"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={30} />
        </a>
        <a
          href="https://www.codewars.com/users/InnaForkert"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodewars size={30} />
        </a>
      </Icons>
      <CV href={cv} target="_blank" rel="noreferrer">
        Have a look at my CV😊
      </CV>
    </ContactsContainer>
  );
}
