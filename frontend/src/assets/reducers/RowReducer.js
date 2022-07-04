

export const rowReducer = (initState = [], action) => {
    
    switch (action.type) {
        case '[ROW] New Row':
            return [...initState, action.payload];
        case '[ROW] Change Row':
            let array = initState.copyWithin();
            for (let i = 0; i < array.length;i++) {
                if(array[i].id === action.payload.id) {
                    array[i] = action.payload.changeValues
                    break;
                }
            }
            return [...array];

        default:
            return;
    }
}