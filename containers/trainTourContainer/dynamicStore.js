import {trainRouteReducer} from './reducer';
import {saga} from './saga';

export function getTrainRouteModule() {
    return {
        id: "trainTour",
        reducerMap: {
            discoverState: trainRouteReducer,
        },
        sagas: [saga],
    };
}