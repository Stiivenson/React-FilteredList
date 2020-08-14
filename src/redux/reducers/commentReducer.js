import * as types from '../../constants/types';

const initialState = {
    comments: [],
    areLoaded: false
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case types.comments.LOAD: {
            return {
                ...state,
                comments: payload,
                areLoaded: true
            }
        }

        default:
            return state
    }
}