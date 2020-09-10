import {
    CHANGE_EVENT_FIELD,
    EDIT_EVENT,
    CLEAR_EVENT_FIELD
} from "../actions/actionTypes";


const initialState = {
    id: "",
    eventName: "",
    date: "",
    time: "",
    participants: "",
    description: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_EVENT:
            console.log(action.payload)
            return {
                ...action.payload
            }
            case CHANGE_EVENT_FIELD:
                console.log(action.payload)
                const {
                    name, value
                } = action.payload;
                return {
                    ...state, [name]: value
                };

            case CLEAR_EVENT_FIELD:
                return {
                    ...initialState
                }
                default:
                    return state;
    }
};