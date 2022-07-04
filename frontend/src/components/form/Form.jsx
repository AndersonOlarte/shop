import React, { useEffect, useState } from 'react';
import { useForm } from '../../assets/hooks/useForm';
import './form.css';

export const Form = ({keysMap, handleNewRow,handleChangeRow, rows}) => {

    const {fields, onInputChange, onResetForm} = useForm({
        "id":"",
        "name": "",
        "typeProduct": "",
        "amount": "",
        "unitValue": "",
        "saleValue": "",
    });

    const [addItem, setAddItem] = useState(true);

    useEffect(() => {
        setAddItem(
            rows.includes(fields["id"]) ?
                false :
                true);
    },[fields, rows]);

    const handleClickAccept = () => {
        addItem ?
            handleNewRow(fields) :
            handleChangeRow(fields["id"], fields);
        onResetForm();
    }

    return(
            <form className="container form">
                <h2>{addItem ? "Add New Product": "Change Product"}</h2>
                <input
                    name = "id"
                    onChange ={onInputChange}
                    placeholder ={keysMap.id}
                    type ="text"
                    value = {fields["id"]}
                />
                <input
                    name = "name"
                    onChange ={onInputChange}
                    placeholder ={keysMap.name}
                    type ="text"
                    value = {fields["name"]}
                />
                <input
                    name = "typeProduct"
                    onChange ={onInputChange}
                    placeholder = {keysMap.typeProduct}
                    value = {fields["typeProduct"]}
                >
                </input>
                <input
                    name ="amount"
                    onChange ={onInputChange}
                    placeholder ={keysMap.amount}
                    type ="number"
                    value = {fields["amount"]}
                    />
                <input
                    name ="unitValue"
                    onChange ={onInputChange}
                    placeholder ={keysMap.unitValue}
                    type ="number"
                    value = {fields["unitValue"]}
                />
                <input
                    name ="saleValue"
                    onChange ={onInputChange}
                    placeholder ={keysMap.saleValue}
                    type ="number"
                    value = {fields["saleValue"]}
                />
                <div id='form_button-container'>
                    <input
                        className = 'accept-button'
                        value ="agregar"
                        type= "button"
                        onClick={handleClickAccept}
                    />
                    <input
                        className='reject-button'
                        onClick={onResetForm}
                        type = "button"
                        value="borrar"
                    />
                </div>
            </form>
        )
}