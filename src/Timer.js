import React, {useState, useEffect} from 'react';
import Button from "./Button";

export default function Timer({seconds}) {

    const [secondsLeft, setSecondsLeft] = useState(seconds);


    // updateTime = (minutes) => {
    //     if(minutes % 60 === 0) {
    //         hrs = minutes / 60;
    //         mins = 0;
    //         secs = 0;
    //         time.push(hrs, mins, secs);
    //         return time;
    //     } else {
    //         hrs = Math.floor(minutes / 60);
    //         mins = minutes % 60;
    //         secs = 0;
    //         time.push(hrs, mins, secs);
    //         return time;
    //     }
    // } 

    // console.log(updateTime(minutes))

    

    // const countDown = () => {
    //     secs = secondsLeft - 1;
    //     hrs = updateTime(minutes)[0];
    //     mins = updateTime(minutes)[1];
    //     // if(secs === 0) {
    //     //     setMinutesLeft(updateTime(minutes)[1] - 1);
    //     // }

    //     // if(minutes === 0) {
    //     //     setHoursLeft(updateTime(minutes)[0] - 1);
    //     // }
    // }

    const onClick = () => {
        alert("Timer started")
    }
    
    useEffect(() => {
        setInterval(() => {
            setSecondsLeft(seconds - 1)
        }, 1000)
    })

    return (
        <div className="flex flex-col items-center">
            <h1>
                <span className="mr-1">{seconds ? secondsLeft + " : " : "HH :"}</span>
                <span className="ml-1">{"MM"}</span>
                <span className="ml-1">{"SS"}</span>
            </h1>
            <div className="block mt-6">
                <Button onClick={onClick} seconds={seconds} type="Start" styles="focus:outline-none px-4 py-2 mx-3 hover:bg-blue-600 rounded-lg bg-blue-300 border-2 text-sm font-lg " />
                <Button type="Stop" styles="focus:outline-none px-4 py-2 hover:bg-red-600 rounded-lg bg-red-300 border-2 text-sm font-lg " />
                <Button type="Reset" styles="focus:outline-none px-4 py-2 ml-3 hover:bg-gray-600 rounded-lg bg-gray-300 border-2 text-sm font-lg " />
            </div>
        </div>
    )
}
