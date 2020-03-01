import {destinationReducer} from './reducer';
import {saga} from './saga';

export function getDiscoverSingleModule() {
    return {
        id: "discoverSingle",
        reducerMap: {
            destinationState: destinationReducer,
        },
        sagas: [saga],
    };
}