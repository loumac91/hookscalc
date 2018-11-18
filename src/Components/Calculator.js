import React, { useState } from 'react';
import Screen from './Screen';
import Body from './Body';
import './Calculator.css';

export default () => {

    const calculator = (() => {
        const [displayValue, setDisplayValue] = useState('0');
        const [historyValue, setHistoryValue] = useState('');
        const [operatorPressed, setOperatorPressed] = useState(false);
        const [a, setA] = useState(0);
        const [operator, setOperator] = useState('');
        const hasDecimal = false;

        const getResult = (b) => {
            switch (operator) {
                case "÷": return a / b;
                case "x": return a * b;
                case "-": return a - b;
                case "+": return a + b;
                default: break;
            }
        }
        
        const appendToDisplay = (numericString) => {
            const newDisplay = `${displayValue}${numericString}`;
            setDisplayValue(parseFloat(newDisplay));
        }

        const reset = () => {
            setHistoryValue('');
            setOperatorPressed(false);
            setDisplayValue('0');
        }

        const handleOperatorPressed = (operatorKey) => {

            if(operatorKey === "C") {
                reset();
                return;
            }                 

            if(operatorPressed) return;

            if (a === 0) {
                setA(parseFloat(displayValue));
            }

            if (operator === '') {
                setOperator(operatorKey);
            }  

            setOperatorPressed(true);

            const setHistory = () => {
                if (historyValue === '') {
                    setHistoryValue(`${displayValue} ${operatorKey}`);
                } else {
                    setHistoryValue(`${historyValue} ${displayValue} ${operatorKey}`);
                }
            }

            switch (operatorKey) {
                case "÷": 
                case "x":
                case "-":
                case "+":
                    setHistory();
                    break;
                case "=":
                    setHistoryValue('');
                    let result = getResult(parseFloat(displayValue));
                    setDisplayValue(getResult(parseFloat(displayValue)));
                    setOperatorPressed(false);
                    break;
                default:
                    break;
            }
        }

        return {
            displayValue,
            historyValue,
            handleKeyPress: (keyValue) => {
                const numericKeyPress = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(keyValue);
                const validDecimalKeyPress = keyValue === "." && !hasDecimal;

                if (!numericKeyPress && !validDecimalKeyPress) {
                    handleOperatorPressed(keyValue);
                    return;
                }
                
                if (validDecimalKeyPress) {
                    appendToDisplay(keyValue);
                } else {
                    if (operatorPressed) {
                        //new display value
                        setDisplayValue(keyValue);
                    } else {
                        appendToDisplay(keyValue);
                    }                    
                }

                setOperatorPressed(false);            
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
