import { Navigation } from 'react-native-navigation';

import Home from '../../screens/Home/';
import Screen1 from '../../screens/Screen1/';
import Screen2 from '../../screens/Screen2/';
import Screen3 from '../../screens/Screen3/';
import LeftDrawer from '../../screens/LeftDrawer/';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('aprn.Home', () => Home, store, Provider);
  Navigation.registerComponent('aprn.Screen1', () => Screen1, store, Provider);
  Navigation.registerComponent('aprn.Screen3', () => Screen3, store, Provider);
  Navigation.registerComponent('aprn.Screen2', () => Screen2, store, Provider);
  Navigation.registerComponent('aprn.LeftDrawer', () => LeftDrawer, store, Provider);
}
