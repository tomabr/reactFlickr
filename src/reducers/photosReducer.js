import * as types from '../actions/actionTypes';
export default function photosReducer(state = [], action) {
  switch (action.type) {
    case 'TAKE_PHOTOS':{
      return [...action.photo.photo];
    }

    default:
      return state;
  }
}



