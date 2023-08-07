import React, { useState } from "react";

import "./index.css";

export default function App() {
    const time = new Date().toLocaleTimeString(); // toLocaleTimeString() is a method of Date object which converts the time to local time of the user's browser
    const [ctime, setCtime] = useState(); // useState is a hook which is used to set the state of the component

    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time); // setCtime is used to set the state of the component
    };

    setInterval(UpdateTime, time); // setInterval is used to call a function after a specific time interval

    return (
        <div className="main">
            <div className="time">
                <h1>{ctime}</h1>
            </div>
        </div>
    );
}
