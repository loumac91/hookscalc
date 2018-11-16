import React, { useState } from 'react';
import Screen from './Screen';
import Body from './Body';
import './Calculator.css';



export default () => {

    const history = [];


    return (
        <div className="calculator">
            <Screen />
            <Body />
        </div>
    );
};
