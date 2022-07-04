import React from 'react';
import './card.css';

export const CardInfo = ({title, value}) => {
    return (
        <div className = "container card-info">
            <h1>{title}</h1>
            <h2>{value}</h2>

        </div>
    )
}