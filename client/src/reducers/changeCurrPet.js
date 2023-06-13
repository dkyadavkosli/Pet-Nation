
const initialState = null;

const changeCurrPet = (state = initialState , action) => {
    switch(action.type){
        case "CURPET": return action.pet;
        default: return state;
    }
}

export default changeCurrPet; 