import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    NEWYEAR = "🎉",
    JULYFOURTH = "🎆",
    HALLOWEEN = "🎃",
    DIWALI = "🪔",
    THANKSGIVING = "🦃"
}

const holidaysByYear: Holiday[] = [
    Holiday.NEWYEAR,
    Holiday.JULYFOURTH,
    Holiday.DIWALI,
    Holiday.HALLOWEEN,
    Holiday.THANKSGIVING
];
const holidaysByAlphabet: Holiday[] = [
    Holiday.DIWALI,
    Holiday.HALLOWEEN,
    Holiday.JULYFOURTH,
    Holiday.NEWYEAR,
    Holiday.THANKSGIVING
];

function getNextHoliday(current: Holiday, order: Holiday[]): Holiday {
    const index = order.indexOf(current);
    return order[(index + 1) % order.length];
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(Holiday.NEWYEAR);

    const advanceByYear = () => {
        setCurrentHoliday((prev) => getNextHoliday(prev, holidaysByYear));
    };

    const advanceByAlphabet = () => {
        setCurrentHoliday((prev) => getNextHoliday(prev, holidaysByAlphabet));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
