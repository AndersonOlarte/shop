import React from 'react';
import { CardInfo } from './CardInfo';
import './card.css';


export const CardContainer = ({summaryValues}) => {
    return (
        <section className="card-container">
            <CardInfo title = "Total productos" value = {summaryValues.totalRows}/>
            <CardInfo title = "valor mercancia" value = {summaryValues.totalCost}/>
            <CardInfo title = "valor de venta" value = {summaryValues.totalSale}/>
        </section>
    );
};