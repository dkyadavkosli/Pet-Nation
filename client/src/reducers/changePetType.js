const initialState = null;

const changePetType = (state = initialState , action) => {
    switch(action.type){
        case "PETTYPE": return action.type2;
        default: return state;
    }
}

export default changePetType; 