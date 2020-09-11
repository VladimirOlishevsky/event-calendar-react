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
            return {
                ...action.payload
            }
            case CHANGE_EVENT_FIELD:
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