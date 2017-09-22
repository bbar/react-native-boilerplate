import { Navigation } from 'react-native-navigation';

import CheckIn from '../../views/CheckIn/';
import CheckOut from '../../views/CheckOut/';
import JobDetails from '../../views/JobDetails/';
import Jobs from '../../views/Jobs/';
import Messages from '../../views/Messages/';
import Performance from '../../views/Performance/';
import Vehicles from '../../views/Vehicles/';
import Status from '../../views/Status/';
import Login from '../../views/Login/';
import LeftDrawer from '../../views/LeftDrawer/';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('aprn.CheckIn', () => CheckIn, store, Provider);
  Navigation.registerComponent('aprn.CheckOut', () => CheckOut, store, Provider);
  Navigation.registerComponent('aprn.JobDetails', () => JobDetails, store, Provider);
  Navigation.registerComponent('aprn.Jobs', () => Jobs, store, Provider);
  Navigation.registerComponent('aprn.Messages', () => Messages, store, Provider);
  Navigation.registerComponent('aprn.Performance', () => Performance, store, Provider);
  Navigation.registerComponent('aprn.Vehicles', () => Vehicles, store, Provider);
  Navigation.registerComponent('aprn.Status', () => Status, store, Provider);
  Navigation.registerComponent('aprn.Login', () => Login, store, Provider);
  Navigation.registerComponent('aprn.LeftDrawer', () => LeftDrawer, store, Provider);
}
