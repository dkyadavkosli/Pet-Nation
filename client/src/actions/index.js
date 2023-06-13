export const changeUser = (user) => {
    return{
        type:"CURRUSER",
        user:user
    }
}


export const changeCurrPet = (pet) => {
    return{
        type:"CURPET",
        pet:pet
    }
}


export const changePetType = (type2) => {
    return{
        type:"PETTYPE",
        type2:type2
    }
}


export const changeCharges = (charges) => {
    return{
        type:"CHARGES",
        charges:charges
    }
}


export const changeFind = (find) => {
    return{
        type:"FIND",
        find:find
    }
}


export const changeCity = (city) => {
    return{
        type:"CITY",
        city:city
    }
}


export const changeType = (typ) => {
    return{
        type:"TYPE",
        typ:typ
    }
}
