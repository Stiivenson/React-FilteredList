import * as types from '../../constants/types';


export const handleSearchInput = (value) => (dispatch) => {
    return dispatch({
        type: types.filter.SET_INPUT,
        payload: value
    });
}

export const handleFilterSelect = (value) => (dispatch) => {
    return dispatch({
        type: types.filter.SET_FILTER,
        payload: value
    });
}