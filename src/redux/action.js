import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POST, SHOW_ALERT, SHOW_LOADER} from './types';

export function createPost(post){
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function showLoader(){
  return {
    type: SHOW_LOADER,
    payload: true,
  }
}

export function hideLoader(){
  return {
    type: HIDE_LOADER,
    payload: false,
  }
}

export function showAlert(message){
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: message,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000)

  }
}

export function hideAlert(){
  return {
    type: HIDE_ALERT,
    payload: null,
  }
}

export function fetchPost(){
  return {
    type: REQUEST_POST,
  }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  //     const json = await response.json();
  //
  //     dispatch({ type: FETCH_POST, payload: json });
  //     dispatch(hideLoader());
  //   } catch (e) {
  //     dispatch(showAlert('Something wrong!'));
  //     dispatch(hideLoader());
  //   }
  // }
}
