import React from 'react';
import './Screen.css';

export default ({displayValue, historyValue}) => {
    return (
        <div className="screen">
            <div className="historyContainer">
                {historyValue}
            </div>
            <div className="valueContainer">
                {displayValue}
            </div>
        </div>
    );
};