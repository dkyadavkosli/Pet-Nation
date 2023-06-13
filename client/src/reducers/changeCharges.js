const initialState = null;

const changeCharges = (state = initialState , action) => {
    switch(action.type){
        case "CHARGES": return action.charges;
        default: return state;
    }
}

export default changeCharges; 