import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
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

export function* fetchDestinationDetails(args) {
  console.log('fetchDestinationDetails', args);
  const destinationId = Number(args.destinationId);
  try {
    const response = yield call(
      fetchData,
      `https://cytapi.telemaco.online/api/Destinazione/${destinationId}?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&lingua=1&fbclid=IwAR3lgdzYZrXBMV_VTKIQAGpm6dQM9LL-wvlvGhGFp3KhbTYZlOVrYywawxY `
    );
    // const response = additionalPlacesData;
    if (response && response.length) {
      yield put(actions.fetchDestinationDetailsSuccess(response));
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}

export function* fetchAdviceActivityDetails(args) {
  console.log('fetchDestinationDetails', args);
  const destinationId = Number(args.destinationId);
  try {
    const response = yield call (
      fetchData,
      `https://cytapi.telemaco.online/api/Pacchetti?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&top=20&lingua=1&order=prezzo&destinazione=0&categoria=0&tags=12;&datastart=1900-01-01&dataend=2099-12-31&prezzomin=0&prezzomax=0&speciale=0&fbclid=IwAR2yXG5M_O88GPBj8bM26-J7S0jcLKa_hhLvFcfSxDKDgvcDaust1TAOMiE`
    );
    // const response = additionalPlacesData;
    if (response && response.length) {
      yield put(actions.fetchAdviceActivityDetailsSuccess(response));
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}


export  function* saga() {
  yield takeEvery('FETCH_DESTINATION_DETAILS', fetchDestinationDetails);
  yield takeEvery('FETCH_ADVICE_ACTIVITY_DETAILS', fetchAdviceActivityDetails);
}



