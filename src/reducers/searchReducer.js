import * as types from '../actions/actionTypes';

export default function searchReducer(state = [], action) {
  switch (action.type) {

    case 'CREATE_SEARCH':{
      return [...state,
        Object.assign({}, action.search)
      ];
    }

    default:
      return state;
  }
}



