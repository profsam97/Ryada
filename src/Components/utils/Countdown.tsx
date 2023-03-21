import React, { useState, useEffect } from 'react';
import {Typography, useMediaQuery} from "@mui/material";

const Countdown = () => {
    const [days, setDays] = useState(3);
    const [hours, setHours] = useState(2);
    const [minutes, setMinutes] = useState(24);

    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);


        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);
    const isSmall : boolean = useMediaQuery('(max-width: 480px)');


    return (
        <Typography variant={isSmall ? 'subtitle1' : 'h6'}><b> Starts in: {days} days, {hours} hours, {minutes} minutes</b></Typography>
    );
};

export default Countdown;