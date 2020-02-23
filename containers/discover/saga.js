import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as constants from './constants'
import additionalPlacesData from './additionalPlaces.json'
import discoverPhotosList from './discover.json'
import axios from 'axios';

function  fetchData (param) {
  return axios.get(param,{}).then((data)=>{name:"sairam"}).catch((err)=>{
 })
}

export function* fetchAdditionPhotos() {
  try {
    const response = yield call(
      fetchData,
      "http://cytapi.telemaco.online/api/Destinazioni?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&fbclid=IwAR1AKEPIlajEBMDPgvH8f-1HIwqgNCd9KkMUJ1WFbX_74OElto3-d8qYGe8", 
    );
    // const response = additionalPlacesData;
    if (response) {
      yield put(actions.fetchAdditionalPhotosApiSuccess(response));
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}

export function* fetchDiscoverPhotos() {
  try {
      const response = yield call(
        fetchData,
        "https://cytapi.telemaco.online/api/Destinazioni?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&evidenza=1&fbclid=IwAR1HeI0TzW7MAJBaCATM19nRQWdMJaSljn10u-aZHieUCYKDnM48QuzCGbY", 
      );
      // const response = discoverPhotosList;
      if(response) {
        yield put(actions.fetchDiscoverPhotosApiSuccess(response))
      }
  } catch(e) {
      console.log("ERROR", e);
  }
}

export  function* saga() {
  console.log("running saga")
  yield takeEvery('FETCH_DISCOVER_PHOTOS_API', fetchDiscoverPhotos);
  yield takeEvery('FETCH_ADDITIONAL_PHOTOS_API', fetchAdditionPhotos);
}



