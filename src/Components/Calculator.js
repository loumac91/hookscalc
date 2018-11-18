import React, { useState } from 'react';
import Screen from './Screen';
import Body from './Body';
import './Calculator.css';

export default () => {

    const calculator = (() => {
        const [displayValue, setDisplayValue] = useState('0');
        const [historyValue, setHistoryValue] = useState('');
        const [lastKeyPress, setLastKeyPress] = useState('');
        const [a, setA] = useState(null);

        const getResult = (operator, b) => {
            switch (operator) {
                case "÷": return a / b;
                case "x": return a * b;
                case "-": return a - b;
                case "+": return a + b;
                default: break;
            }
        }

        const lastKeyWasOperator = () => {
            return ["÷", "-", "+", "x"].includes(lastKeyPress);
        }
        
        const appendToDisplay = (numericString) => {
            const newDisplay = `${displayValue}${numericString}`;
            setDisplayValue(parseFloat(newDisplay));
        }

        const reset = () => {
            setHistoryValue('');
            setDisplayValue('0');
            setLastKeyPress('');
            setA(null);
        }

        const getPreviousOperator = () => {
            let i = historyValue.length;
            while (i--) {
                const currentChar = historyValue.charAt(i);
                if (["÷", "-", "+", "x"].includes(currentChar)) {
                    return currentChar;
                }
            }
        }
 
        return {
            displayValue,
            historyValue,
            handleKeyPress: (keyValue) => {
                
                const runningCalc = '';

                const invalidDecimalKeyPress = keyValue === "." && displayValue.indexOf(".") >= 0;
                const operatorPressed = ["÷", "-", "+", "x"].includes(keyValue)
                const clear = keyValue === "C";
                const equalsPressed =  keyValue === "=";

                if (invalidDecimalKeyPress) return;

                if (clear) {
                    reset();
                    return
                }

                if (equalsPressed) {
                    const lastOperator = getPreviousOperator();
                    let b = parseFloat(displayValue);
                    let result = getResult(lastOperator, b);
                    setHistoryValue('');
                    setDisplayValue(result);
                    setA(result);
                    return;
                }
                
                if (operatorPressed) {                    
                    if (lastKeyWasOperator()) {
                        setHistoryValue(historyValue.replace(/.$/, keyValue));
                    } else {
                        if (historyValue === '') {
                            setA(parseFloat(displayValue));
                            setHistoryValue(`${displayValue} ${keyValue}`);
                        } else {
                            setHistoryValue(`${historyValue} ${displayValue} ${keyValue}`);
                            
                            const lastOperator = getPreviousOperator();
                            let b = parseFloat(displayValue);
                            let result = getResult(lastOperator, b);
                            setDisplayValue(result);
                            setA(result);
                        }
                    }
                } else {
                    //numeric key
                    if (lastKeyWasOperator()) {
                        setDisplayValue(keyValue);
                    } else {
                        appendToDisplay(keyValue);
                    }
                }

                setLastKeyPress(keyValue);          
            }
        }
    })();

    return (
        <div className="calculator">
            <Screen displayValue={calculator.displayValue} historyValue={calculator.historyValue}/>
            <Body keyPressHandler={calculator.handleKeyPress}/>
        </div>
    );
};
