import constants from './constants';

export function fetchDiscoverPhotosApi () {
    return {
        type : constants.FETCH_DISCOVER_PHOTOS_API,
    }
} 

export function fetchDiscoverPhotosApiSuccess (payload) {
    return {
        type : constants.FETCH_DISCOVER_PHOTOS_API_SUCCESS,
        payload
    }
}

export function fetchDiscoverPhotosApiFailure (payload) {
    return {
        type : constants.FETCH_DISCOVER_PHOTOS_API_FAILURE,
        payload
    }
}

export function fetchAdditionalPhotosApi () {
    return {
        type : constants.FETCH_ADDITIONAL_PHOTOS_API,
    }
} 

export function fetchAdditionalPhotosApiSuccess (payload) {
    return {
        type : constants.FETCH_ADDITIONAL_PHOTOS_API_SUCCESS,
        payload
    }
}

export function fetchAdditionalPhotosApiFailure (payload) {
    return {
        type : constants.FETCH_ADDITIONAL_PHOTOS_API_ERROR,
        payload
    }
}


export default {
    fetchDiscoverPhotosApi,
    fetchDiscoverPhotosApiSuccess,
    fetchDiscoverPhotosApiFailure,
    fetchAdditionalPhotosApi,
    fetchAdditionalPhotosApiSuccess,
    fetchAdditionalPhotosApiFailure
}
