const initialState = null;

const changeCity = (state = initialState , action) => {
    switch(action.type){
        case "CITY": return action.city;
        default: return state;
    }
}

export default changeCity; 