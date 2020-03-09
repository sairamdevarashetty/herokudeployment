import {discoverReducer} from './reducer';
import {saga} from './saga';

export function getDefaultPageModule() {
    return {
        id: "discover",
        reducerMap: {
            discoverState: discoverReducer,
        },
        sagas: [saga],
    };
}