const initialState = null;

const changeType = (state = initialState , action) => {
    switch(action.type){
        case "TYPE": return action.typ;
        default: return state;
    }
}

export default changeType; 