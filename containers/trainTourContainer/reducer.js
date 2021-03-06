import actions from './actions'
import constants from './constants';

const initialState = {
  isUserLoggedIn:false  
}

export const trainRouteReducer = (state={}, action) => {
  switch(action.type) {
    case (constants.FETCH_DISCOVER_PHOTOS_API_SUCCESS):
      return {
        ...state,
        discoverPhotos: [].concat(action.payload)
      }
      break;
    
    case (constants.FETCH_ADDITIONAL_PHOTOS_API_SUCCESS):
      return {
        ...state,
        additionalPhotos: [].concat(action.payload)
      }
      break;
    
    default:
      return state
  }
}

export default {
  trainRouteReducer
};

