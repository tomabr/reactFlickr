import * as types from './actionTypes';
import $ from 'jquery';
import { takePhotos } from './photosActions';

export function createSearch(search) {
  return { type: types.CREATE_SEARCH, search };
}

const apiURL = 'https://api.flickr.com/services/rest/';

const apiKey = 'f8ce2d65669e201b2b50723818e2b16b';
let params = {
  text: '',
  method: 'flickr.photos.search',
  api_key: encodeURIComponent(apiKey),
  format: 'json',
  per_page: 40,
  nojsoncallback: 1,
  page: 1
};

export function searchText(text) {
  params.text = text;

  function searchInFlickr() {
    return $.when($.ajax(apiURL + '?' + $.param(params)));
  }

  return function(dispatch) {
    return searchInFlickr().then(
    response => {
      dispatch(takePhotos(response.photos));
    }, error => {});
  };
}
