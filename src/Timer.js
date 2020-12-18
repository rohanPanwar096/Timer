import React, {useState, useEffect} from 'react';
import Button from "./Button";

export default function Timer({minutes}) {

    console.log(minutes)

    let hrs, mins, secs;
    let time = [],


    updateTime = (minutes) => {
        if(minutes % 60 === 0) {
            hrs = minutes / 60;
            mins = 0;
            secs = 0;
            time.push(hrs, mins, secs);
            return time;
        } else {
            hrs = Math.floor(minutes / 60);
            mins = minutes % 60;
            secs = 0;
            time.push(hrs, mins, secs);
            return time;
        }
    } 

    console.log(updateTime(minutes))

    
    const [hoursLeft, setHoursLeft] = useState(parseInt(updateTime(minutes[0])));

    const [minutesLeft, setMinutesLeft] = useState(updateTime(minutes[1]));

    const [secondsLeft, setSecondsLeft] = useState(60);

    const countDown = () => {
        secs = secondsLeft - 1;
        hrs = updateTime(minutes)[0];
        mins = updateTime(minutes)[1];
        // if(secs === 0) {
        //     setMinutesLeft(updateTime(minutes)[1] - 1);
        // }

        // if(minutes === 0) {
        //     setHoursLeft(updateTime(minutes)[0] - 1);
        // }
    }

    return (
        <div className="flex flex-col items-center">
            <h1>
                <span className="mr-1">{minutes ? updateTime(minutes)[0] + " : " : "HH :"}</span>
                <span className="ml-1">{minutes ? updateTime(minutes)[1] + " : " : " MM :"}</span>
                <span className="ml-1">{minutes ? updateTime(minutes)[2] : " SS"}</span>
            </h1>
            <div className="block mt-6">
                <Button minutes={mins} hours={hrs} type="Start" styles="focus:outline-none px-4 py-2 mx-3 hover:bg-blue-600 rounded-lg bg-blue-300 border-2 text-sm font-lg " />
                <Button minutes={mins} hours={hrs} type="Stop" styles="focus:outline-none px-4 py-2 hover:bg-red-600 rounded-lg bg-red-300 border-2 text-sm font-lg " />
                <Button minutes={mins} hours={hrs} type="Reset" styles="focus:outline-none px-4 py-2 ml-3 hover:bg-gray-600 rounded-lg bg-gray-300 border-2 text-sm font-lg " />
            </div>
        </div>
    )
}
