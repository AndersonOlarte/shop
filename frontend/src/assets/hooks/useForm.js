import { useState } from "react";


export const useForm = (initialState = {}) => {

    const [fields, setFields] = useState(initialState);

    const onInputChange = ({target}) => {
        setFields({
            ...fields,
            [target.name]: target.value
        });
    };

    const onResetForm = () => setFields({
        "id":"",
        "name": "",
        "typeProduct": "",
        "amount": "",
        "unitValue": "",
        "saleValue": "",
    });

    return {
        fields,
        onInputChange,
        onResetForm
    };
}