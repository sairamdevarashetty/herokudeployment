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


export  function* saga() {
  yield takeEvery('FETCH_DESTINATION_DETAILS', fetchDestinationDetails);
}



