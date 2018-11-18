import React from 'react';
import './Body.css';

const divButton = (className, value, keyPressHandler) => {
    return <div className={className} 
                onClick={(e) => {
                    keyPressHandler(e.target.textContent);
                }}>
        {value}
    </div>
};

export default ({keyPressHandler}) => {

    const cancel = divButton("button cancel", "C", keyPressHandler);
    const divide = divButton("button divide", "÷", keyPressHandler);
    const multiply = divButton("button multiply", "x", keyPressHandler);
    const seven = divButton("button seven", "7", keyPressHandler);
    const eight = divButton("button eight", "8", keyPressHandler);
    const nine = divButton("button nine", "9", keyPressHandler);
    const minus = divButton("button minus", "-", keyPressHandler);
    const four = divButton("button four", "4", keyPressHandler);
    const five = divButton("button five", "5", keyPressHandler);
    const six = divButton("button six", "6", keyPressHandler);
    const add = divButton("button add", "+", keyPressHandler);
    const one = divButton("button one", "1", keyPressHandler);
    const two = divButton("button two", "2", keyPressHandler);
    const three = divButton("button three", "3", keyPressHandler);
    const equals = divButton("button equals", "=", keyPressHandler);
    const zero = divButton("button zero", "0", keyPressHandler);
    const decimal = divButton("button decimal", ".", keyPressHandler);

    return (
        <div className="calcBody">
            {cancel}
            {divide}
            {multiply}
            {seven}
            {eight}
            {nine}
            {minus}
            {four}
            {five}
            {six}
            {add}
            {one}
            {two}
            {three}
            {equals}
            {zero}
            {decimal}         
        </div>
    );
};
