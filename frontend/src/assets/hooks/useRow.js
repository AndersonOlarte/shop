import { useReducer } from "react";
import { rowReducer } from "../reducers/RowReducer";

const data = require('../exampleData/products.json');

export const useRow = (type = 'items') => {

    const [rows, dispatchRows] = useReducer(rowReducer, data);

    //data info

    const listId = rows.map(row => {return row.id});
    const keys = Object.keys(rows[0]);
    const typeOptionsKeys = new Set(rows.map(row => row.typeProduct));

    let typeOptions = {};
    Array.from(typeOptionsKeys).map(item => {
        const amount = rows.filter(type => item === type.typeProduct ).length;
        typeOptions = {
            ...typeOptions,
            [item]: amount
        }
        return;
    });

    let headers = [
        'Código','Nombre',
        'Tipo','Unidades',
        'Costo','Precio Venta'
    ];
    let keysMap = {};

    switch(type) {
        case 'items':
            for (let index = 0; index < keys.length; index++) {
                keysMap[keys[index]] = headers[index];
            }
            break;
        case 'customers':
            break;

        default:
            break;
    };

    //data summarize

    const totalRows = rows.length;
    let totalCost = 0;
    let totalSale = 0;

    for (const row of rows) {
        totalCost += parseInt(row.unitValue);
        totalSale += parseInt(row.saleValue);
    }
    console.log(totalCost);

    const summaryValues = {
        totalCost,
        totalRows,
        totalSale
    };

    //row actions

    const handleNewRow = (newRow) => {
        dispatchRows({
            type: '[ROW] New Row',
            payload: newRow
        })
    }

    const handleChangeRow = (id, changeValues) => {
        dispatchRows({
            type: '[ROW] Change Row',
            payload: {
                id,
                changeValues
            }
        })
    }

    return {
        rows,
        keysMap,
        handleNewRow,
        handleChangeRow,
        typeOptions,
        listId,
        summaryValues
    }
}