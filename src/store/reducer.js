import * as actionType from './actions';

const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.payload.name,
                age: action.payload.age,
            }
            return {
                persons: state.persons.concat(newPerson)
            }
        case actionType.REMOVE_PERSON:
            return {
                persons: state.persons.filter(person => person.id !== action.id)
            }
        default:
            break;
    }
    
    return state;
}

export default reducer;