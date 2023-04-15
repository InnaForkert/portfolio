import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { Icon } from "./mixins.styled";
import { TbPlayCard } from "react-icons/tb";
import { GiDrumKit, GiMonsterGrasp } from "react-icons/gi";
import { alarm, monster } from "./keyframes.styled";
import useSound from "use-sound";
import sound from "../../data/sound.mp3";
import { useState } from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

export const Alarm = styled(RiAlarmWarningFill)`
  ${Icon} 

  .active & {
    animation: ${alarm} 1s linear infinite alternate;
  }
`;

export const CrossIcon = styled(GrClose)`
  ${Icon}

  transition: transform 2s, filter 2s;

  &:hover {
    -webkit-animation: 0;
  }

  &:active,
  &:focus {
    -webkit-animation: 0;
    transform: rotate(2000deg) scale(0.6);
  }
`;

export const CardIcon = styled(TbPlayCard)`
  ${Icon}
  transition: transform 500ms, filter 2s;

  &:hover {
    -webkit-animation: 0;
  }
  .active & {
    transform: rotateY(180deg);
  }
`;
export const Monster = styled(GiMonsterGrasp)`
  ${Icon}
  transform: rotate(0);

  .active & {
    animation: ${monster} 500ms;
  }
`;

const DrumsIcon = styled(GiDrumKit)`
  ${Icon}
`;

export const Drums = () => {
  const [play, { stop }] = useSound(sound, { loop: true });
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (playing) {
      stop();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    }
  }

  return <DrumsIcon onClick={toggleMusic} />;
};
