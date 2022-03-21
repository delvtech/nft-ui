import {
  StyledSemiColon,
  StyledTimer,
  TimerFlex,
} from "components/Countdown/styles";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

interface TimerProps {
  targetDate: Moment;
}

export const Timer = ({ targetDate }: TimerProps) => {
  const [days, setDays] = useState<string | number>("00");
  const [hours, setHours] = useState<string | number>("00");
  const [minutes, setMinutes] = useState<string | number>("00");
  const [seconds, setSeconds] = useState<string | number>("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      const days = Math.floor(duration.asDays());
      const hours = Math.floor(duration.asHours()) % 24;
      const minutes = Math.floor(duration.asMinutes()) % 60;
      const seconds = Math.floor(duration.asSeconds() % 60);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <TimerFlex>
      <StyledTimer>{days}</StyledTimer>
      <StyledSemiColon>:</StyledSemiColon>
      <StyledTimer>{hours}</StyledTimer>
      <StyledSemiColon>:</StyledSemiColon>
      <StyledTimer>{minutes}</StyledTimer>
      <StyledSemiColon>:</StyledSemiColon>
      <StyledTimer>{seconds}</StyledTimer>
    </TimerFlex>
  );
};
