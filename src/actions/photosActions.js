import * as types from './actionTypes';

export function takePhotos(photo){
  return {type: types.TAKE_PHOTOS, photo};
}

