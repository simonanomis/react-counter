import React from 'react';

import './CounterOutput.css';

interface CounterOutputProps {
    value: number;
}

const counterOutput = ({value} : CounterOutputProps) => (
    <div className="CounterOutput">
        Current Counter: {value}
    </div>
);

export default counterOutput;