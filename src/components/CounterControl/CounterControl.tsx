import React from 'react';

import './CounterControl.css';

interface CounterControlProps {
    clicked: () => void;
    label: string;
}


const counterControl = ({clicked, label}: CounterControlProps) => (
    <div className="CounterControl" onClick={clicked}>
        {label}
    </div>
);

export default counterControl;