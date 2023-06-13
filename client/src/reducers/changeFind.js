const initialState = null;

const changeFind = (state = initialState , action) => {
    switch(action.type){
        case "FIND": return action.find;
        default: return state;
    }
}

export default changeFind; 