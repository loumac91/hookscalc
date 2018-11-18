import React, { useState } from 'react';
import './Body.css';

export default () => {
    return (
        <div className="calcBody">
            <div className="button cancel">C</div>
            <div className="button divide">÷</div>
            <div className="button multiply">x</div>
            <div className="button seven">7</div>
            <div className="button eight">8</div>
            <div className="button nine">9</div>
            <div className="button minus">-</div>
            <div className="button four">4</div>
            <div className="button five">5</div>
            <div className="button six">6</div>
            <div className="button add">+</div>
            <div className="button one">1</div>
            <div className="button two">2</div>
            <div className="button three">3</div>
            <div className="button equals">=</div>
            <div className="button zero">0</div>
            <div className="button decimal">.</div>
        </div>
    );
};