import * as types from '../../constants/types';
import axois from 'axios';

const loadComments = () => (dispatch) => {
  axois
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((res) =>
      dispatch({
        type: types.comments.LOAD,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export {
  loadComments as
  default
};