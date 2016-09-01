//root reducer
import {combineReducers} from 'redux';
import searches from './searchReducer';
import photos from './photosReducer';

const rootReducer = combineReducers({
  searches,
  photos
});
export default rootReducer;
