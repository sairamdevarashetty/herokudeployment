import actions from './actions'
import constants from './constants';

const initialState = {
  isUserLoggedIn:false  
}

export const destinationReducer = (state={}, action) => {
  switch(action.type) {
    case (constants.FETCH_DESTINATION_DETAILS_SUCCESS):
      return {
        ...state,
        destionationDetails: [].concat(action.payload)
      }
      break;
        
    default:
      return state
  }
}

export default {
  destinationReducer
};

