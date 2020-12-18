import React, {useState} from 'react';
import Timer from "./Timer"

export default function Input() {

    const [minutes, setMinutes] = useState(0)

    const minuteChange = (event) => {
        event.preventDefault();
        let value;

        value = event.target.value;

        setMinutes(value)
    }

    return (
        <div className="flex flex-col items-center">
            <label className="pl-4 text-lg font-lg tracking-wider" for="min">
                Enter the Minutes :      
            </label>
            <input className="rounded-lg border-2 border-gray py-1 px-2 my-3" value={minutes} id="min" onChange={(e) => minuteChange(e)} />

            <Timer seconds={minutes * 60} />
        </div>
    )
}
