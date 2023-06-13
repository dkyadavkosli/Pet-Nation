import  changeUser  from "./changeUser";
import  changeCurrPet  from "./changeCurrPet";
import changePetType from "./changePetType";
import changeCharges from "./changeCharges";
import changeFind from "./changeFind";
import changeCity from "./changeCity";
import changeType from "./changeType";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeUser,
    changeCurrPet,
    changePetType,
    changeCharges,
    changeFind,
    changeCity,
    changeType
})

export default rootReducer;