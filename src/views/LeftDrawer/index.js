import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Keychain from 'react-native-keychain';
import globals from '../../globals';

import {
  ButtonText,
  DrawerContent,
  NameContainer,
  Name,
} from './styled';

const NavLink = ({ text, icon, onPress }) => (
  <View>
    <Icon.Button
      size={26}
      name={icon}
      color="#5e5e5e"
      backgroundColor="#fff"
      onPress={onPress}
    >
      <ButtonText>{text}</ButtonText>
    </Icon.Button>
  </View>
);

NavLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

// const pushRoute = (drawer, navigator, route) => {
//   navigator.push(route);
//   drawer.closeDrawer();
// };

const getUserName = (name, number) => {
  if (!name.first) return `Driver ${number}`;
  return `${name.first} ${name.last}`;
};

const LeftDrawer = ({
  navigator,
  checkedIn,
  driverNumber,
  driverName,
  _logout,
  _fetchVerifyCredentialsFailure,
  _clearWatchGeolocation,
}) => (
  <DrawerContent>

    <NameContainer>
      {/* <Name>{getUserName(driverName, driverNumber)}</Name> */}
      <Name>Brent Barbata</Name>
    </NameContainer>

    {checkedIn ? (
      <NavLink
        text="Check Out"
        icon="sign-out"
        onPress={() => {
          navigator.handleDeepLink({ link: 'CheckOut/' });
          navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'closed',
          });
        }}
      />
    ) : (
      <NavLink
        text="Check In"
        icon="sign-in"
        onPress={() => {
          navigator.handleDeepLink({ link: 'CheckIn/' });
          navigator.toggleDrawer({
            side: 'left',
            animated: true,
            to: 'closed',
          });
        }}
      />
    )}

    <NavLink
      text="Jobs"
      icon="briefcase"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Jobs/' });
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'closed',
        });
      }}
    />

    <NavLink
      text="Reset Credentials"
      icon="circle-o-notch"
      onPress={() => {
        Alert.alert(
          'Reset Credentials',
          'This will remove the stored credentials used for authentication, which will require you to sign in before using the app again.',
          [
            { text: 'Cancel', onPress: () => null, style: 'cancel' },
            { text: 'OK',
              onPress: () => {
                navigator.toggleDrawer({
                  side: 'left',
                  animated: true,
                  to: 'closed',
                });
                // _clearWatchGeolocation();
                Keychain
                  .resetInternetCredentials(globals.keychain_servers.agent_portal)
                  .then(() => {
                    console.log('Credentials successfully deleted.');
                  });
                // _logout();
                // _fetchVerifyCredentialsFailure(null);
              } },
          ],
          { cancelable: true },
        );
      }}
    />

    <NavLink
      text="Messages"
      icon="comments"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Messages/' });
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'closed',
        });
      }}
    />

    <NavLink
      text="Vehicles"
      icon="truck"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Vehicles/' });
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'closed',
        });
      }}
    />

    <NavLink
      text="Performance"
      icon="pie-chart"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Performance/' });
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'closed',
        });
      }}
    />
  </DrawerContent>
);

LeftDrawer.propTypes = {
  navigator: PropTypes.object,
  checkedIn: PropTypes.bool,
  driverNumber: PropTypes.string,
  driverName: PropTypes.string,
  _logout: PropTypes.func,
  _fetchVerifyCredentialsFailure: PropTypes.func,
  _clearWatchGeolocation: PropTypes.func,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
