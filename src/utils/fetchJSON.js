import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

//CRCK api used as a placeholder for sermons
//Change this URL when the API is set up for the new website
const DRUPAL_URL = "https://api.vision100.org/api/views/";
const DRUPAL_SEARCH_SERMONS = DRUPAL_URL + "all_challenge_sermons_api?display_id=services_1&filters";
const DRUPAL_GET_PAGE = DRUPAL_URL + "react_page_api?display_id=services_1&filters[page_title]=";

//Example suffix: all_challenge_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  }
  else {
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function searchDrupalSermons(query, type, callback) {
  fetch(DRUPAL_SEARCH_SERMONS + '[' + type + ']=' + query)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getPageFromDrupal(page, callback) {
  fetch(DRUPAL_GET_PAGE + page)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

