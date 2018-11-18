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

        const [lastKeyPress, setLastKeyPress] = useState('');

        const lastKeyWasOperator = () => {
            return ["÷", "-", "+", "x"].includes(lastKeyPress);
        }

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
            setA(0);
            setOperator('');
        }

        const handleOperatorPressed = (operatorKey) => {
            
            if(operatorKey === "C") {
                reset();
                return;
            }                 

            //if(operatorPressed) return;

            if (a === 0) {
                setA(parseFloat(displayValue));
            }

            //if (operator === '') {
                setOperator(operatorKey);
            

            setOperatorPressed(true);

            const setHistory = () => {
                const historyAppended = ``;

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
                }
                
                if (validDecimalKeyPress) {
                    appendToDisplay(keyValue);
                } else if(numericKeyPress) {
                    if (operatorPressed) {
                        //new display value
                        setDisplayValue(keyValue);
                    } else {
                        appendToDisplay(keyValue);
                    }                    
                }

                setOperatorPressed(false);  
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
