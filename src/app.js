import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../src/state/store';

import { registerScreens } from '../src/components/Navigation/screens';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'aprn.Status', // unique ID registered with Navigation.registerScreen
    title: 'Agent Portal', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: {
    left: {
      screen: 'aprn.LeftDrawer',
    },
  },
});
