import * as types from '../../constants/types';

const initialState = {
    search: null,
    filter: ''
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case types.filter.SET_INPUT: {
            return {
                ...state,
                search: payload
            }
        }

        case types.filter.SET_FILTER: {
            return {
                ...state,
                filter: payload
            }
        }

        default:
            return state
    }
}