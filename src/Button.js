import React, {useState, useEffect} from 'react'

export default function Button({ minutes,styles, type, hours, onClick , seconds}) {

    let secs;

    const [timeLeft, setTimeLeft] = useState({
        hours: hours,
        minutes: minutes,
        seconds: 60
    })

    // const onClick = (time) => {
    //     // if(type === "Start") {
    //     //     setInterval(() => {
    //     //        countDown()
    //     //     }, 1000)
    //     // }

    //     // if(type === "Stop") {
    //     //     setTimeLeft({
    //     //         hours: hours,
    //     //         minutes: minutes - 1,
    //     //         seconds: secs
    //     //     })
    //     // }

    //     // if(type === "Reset") {
    //     //     setTimeLeft({
    //     //         hours: 0,
    //     //         minutes: 0,
    //     //         seconds: 0,
    //     //     })
    //     // }
    // }

    const countDown = () => {
        secs = timeLeft.seconds - 1;

        if(secs === 0) {
            setTimeLeft({minutes: minutes - 1})
        }

        if(minutes === 0) {
            setTimeLeft({ hours: 0});
        }

        setTimeLeft({seconds: secs})
    }

    return (
        <button className={`${styles}`} onClick={() => {
            setInterval(() => {
                onClick()
            }, 1000)
        }}>
            {type}
        </button>
    )
}
