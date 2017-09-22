import { combineReducers } from 'redux-immutable';

// import login from '../../views/login/reducer';
// import geolocation from '../../geolocation/reducers/';
// import jobs from '../../views/jobs/reducer';
// import checkIn from '../../views/check_in/reducer';
// import jobDetails from '../../views/job_details/reducer';
// import vehicles from '../../views/vehicles/reducer';
// import profile from '../../views/profile/reducer';
// import camera from '../../views/camera/reducer';
// import status from '../../views/status/reducer';

import { fromJS } from 'immutable';

const bs = (state = fromJS({ example: null }), action) => state;

const rootReducer = combineReducers({
  bs,
  // login,
  // geolocation,
  // jobs,
  // checkIn,
  // jobDetails,
  // vehicles,
  // profile,
  // camera,
  // status,
});

export default rootReducer;
