import React, { useState } from 'react';
import './Screen.css';

export default () => {

    const [value, setValue] = useState("123456789");

    return (
        <div className="screen">
            <div className="historyContainer">
                "placeHolder"
            </div>
            <div className="valueContainer">
                {value}
            </div>
        </div>
    );
};