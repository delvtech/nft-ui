import moment from "moment";
import { useEffect, useState } from "react";
import {
  StyledSemiColon,
  StyledTimer,
  TimerFlex,
} from "components/Countdown/styles";

export const Timer = () => {
  const [days, setDays] = useState<string | number>("00");
  const [hours, setHours] = useState<string | number>("00");
  const [minutes, setMinutes] = useState<string | number>("00");
  const [seconds, setSeconds] = useState<string | number>("00");

  useEffect(() => {
    setInterval(() => {
    const dateNow = moment() as any;
     const dateThen = moment(
       "2020-01-09 00:00:00",
       "YYYY-MM-DD hh:mm:ss"
     ) as any;
     const countdown = moment(dateThen - dateNow);
      setDays(countdown.format("DD"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);
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
