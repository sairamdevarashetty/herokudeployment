import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as constants from './constants'
import additionalPlacesData from './additionalPlaces.json'
import discoverPhotosList from './discover.json'
import axios from 'axios';

function  fetchData (param) {
  return axios
          .get(param,{ mode: 'no-cors'})
          .then((response)=> {
            console.log("Response", response);
            return response.data 
          })
          .catch((err) => {
           })
}

export function* fetchBusApiData() {
  try {
    const response = yield call(
      fetchData,
      "https://cytapi.telemaco.online/api/Tag/12?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&lingua=1", 
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
        "https://cytapi.telemaco.online/api/Pacchetti?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&top=20&lingua=1&order=prezzo&destinazione=0&categoria=0&tags=12;&datastart=1900-01-01&dataend=2099-12-31&prezzomin=0&prezzomax=0&speciale=0"
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
  yield takeEvery('FETCH_ADDITIONAL_PHOTOS_API', fetchBusApiData);
}



