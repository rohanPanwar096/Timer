import React, {useState, useEffect} from 'react';

export default function Timer({seconds}) {

    const [time, setTime] = useState({});
    const [secondsLeft, setSecondsLeft] = useState(seconds);
    const [is_active, setActive] = useState(false);

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        
        let obj = {
                    "h": hours < 10 ? "0" + hours : hours,
                    "m": minutes < 10 ? "0" + minutes : minutes,
                    "s": seconds < 10 ? "0" + seconds : seconds
                };
        
        return obj;
    }

    useEffect(() => {
        setSecondsLeft(seconds)
    }, [seconds])

    useEffect(() => {
        if(secondsLeft >= 0) {
            let timeLeft = secondsToTime(secondsLeft);
            setTime(timeLeft);
        }
    }, [secondsLeft])

    useEffect(() => {
        let interval = null
        if (is_active) {
          interval = setInterval(() => {
                setSecondsLeft((s) => s - 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [is_active])    


    return (
        <div className="flex flex-col items-center">
            <h1>
                <span className="mr-1" id="hrs">{seconds ? time["h"] + " : " : "HH :"}</span>
                <span className="ml-1" id="mins">{seconds ? time["m"] + " : " : "MM :"}</span>
                <span className="ml-1" id="secs">{seconds ? time["s"] : "SS"}</span>
            </h1>
            <div className="block mt-6">
                <button onClick={() => setActive(true)}  className="focus:outline-none px-4 py-2 mx-3 hover:bg-blue-600 rounded-lg bg-blue-300 border-2 text-sm font-lg ">Start</button> {" "}
                <button onClick={() => setActive(false)} className="focus:outline-none px-4 py-2 hover:bg-red-600 rounded-lg bg-red-300 border-2 text-sm font-lg">Stop</button>
                <button onClick={() => setTime(() => {
                    setActive(false);
                    document.getElementById("min").value = 0
                    return {h: "HH", m: "MM", s: "SS"}
                })} className="focus:outline-none px-4 py-2 ml-3 hover:bg-gray-600 rounded-lg bg-gray-300 border-2 text-sm font-lg">Reset</button>
            </div>
        </div>
    )
}
