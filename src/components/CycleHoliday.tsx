import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    DragonBoatFestival = "🎏",
    Halloween = "🎃",
    Diwali = "🪔",
    Christmas = "🎄",
    NewYear = "🎆"
}

const holidaysByYear = [
    Holiday.NewYear,
    Holiday.DragonBoatFestival,
    Holiday.Diwali,
    Holiday.Halloween,
    Holiday.Christmas
    // Add the two additional holidays in order of occurrence in the year
];

const holidaysAlphabetically = [
    Holiday.Christmas,
    Holiday.Diwali,
    Holiday.DragonBoatFestival,
    Holiday.Halloween,
    Holiday.NewYear
    // Add the two additional holidays in alphabetical order
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(
        Holiday.DragonBoatFestival
    );

    const nextHolidayAlphabetically = () => {
        const index = holidaysAlphabetically.indexOf(currentHoliday);
        setCurrentHoliday(
            holidaysAlphabetically[(index + 1) % holidaysAlphabetically.length]
        );
    };

    const nextHolidayByYear = () => {
        const index = holidaysByYear.indexOf(currentHoliday);
        setCurrentHoliday(holidaysByYear[(index + 1) % holidaysByYear.length]);
    };

    return (
        <div>
            Holiday: {currentHoliday}
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
