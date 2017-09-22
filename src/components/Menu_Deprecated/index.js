import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Keychain from 'react-native-keychain';
import { connect } from 'react-redux';
import { Brand } from '../../fonts';
import globals from '../../globals';

import {
  CHECK_IN,
  CHECK_OUT,
  JOBS,
  // MESSAGES,
  // VEHICLES,
  // PERFORMANCE,
  // STATUS,
  routes,
} from '../Navigator/constants';

// Import necessary function to shutdown app //
import {
  clearWatchGeolocation,
} from '../../geolocation/actions';

import {
  fetchVerifyCredentialsFailure,
  reset as logout,
} from '../../views/Login/actions';

const styles = StyleSheet.create({
  drawer_content: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  name_container: {
    borderBottomWidth: 1,
    borderBottomColor: '#5e5e5e',
    paddingBottom: 10,
    marginBottom: 5,
  },
  name: {
    fontFamily: Brand.Light,
    color: '#1b1a72',
    fontSize: 22,
  },
  link_text: {
    fontFamily: Brand.Regular,
    fontSize: 24,
    color: '#5e5e5e',
  },
});


const NavLink = ({ text, icon, onPress }) => (
  <View>
    <Icon.Button
      size={26}
      name={icon}
      color="#5e5e5e"
      backgroundColor="#fff"
      onPress={onPress}
    >
      <Text style={styles.link_text}>{text}</Text>
    </Icon.Button>
  </View>
);

NavLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

const pushRoute = (drawer, navigator, route) => {
  navigator.push(route);
  drawer.closeDrawer();
};

const getUserName = (name, number) => {
  if (!name.first) return `Driver ${number}`;
  return `${name.first} ${name.last}`;
};

const Menu = ({
  navigator,
  drawer,
  checkedIn,
  driverNumber,
  driverName,
  _logout,
  _fetchVerifyCredentialsFailure,
  _clearWatchGeolocation,
}) => (
  <View style={styles.drawer_content}>

    <View style={styles.name_container}>
      <Text style={styles.name}>{getUserName(driverName, driverNumber)}</Text>
    </View>

    {checkedIn ? (
      <NavLink
        text="Check Out"
        icon="sign-out"
        onPress={() => {
          pushRoute(drawer, navigator, routes[CHECK_OUT]);
        }}
      />
    ) : (
      <NavLink
        text="Check In"
        icon="sign-in"
        onPress={() => {
          pushRoute(drawer, navigator, routes[CHECK_IN]);
        }}
      />
    )}

    <NavLink
      text="Jobs"
      icon="briefcase"
      onPress={() => {
        pushRoute(drawer, navigator, routes[JOBS]);
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
                drawer.closeDrawer();
                _clearWatchGeolocation();
                Keychain
                  .resetInternetCredentials(globals.keychain_servers.agent_portal)
                  .then(() => {
                    console.log('Credentials successfully deleted.');
                  });
                _logout();
                _fetchVerifyCredentialsFailure(null);
              } },
          ],
          { cancelable: true },
        );
      }}
    />

    {/* <NavLink
      text="Messages"
      icon="comments"
      onPress={() => {
        pushRoute(drawer, navigator, routes[MESSAGES]);
      }}
    /> */}

    {/* <NavLink
      text="Vehicles"
      icon="truck"
      onPress={() => {
        pushRoute(drawer, navigator, routes[VEHICLES]);
      }}
    /> */}

    {/* <NavLink
      text="Performance"
      icon="pie-chart"
      onPress={() => {
        pushRoute(drawer, navigator, routes[PERFORMANCE]);
      }}
    /> */}

    {/* <NavLink
      text="Exit"
      icon="times"
      onPress={() => {
        console.log('kill it fucker...');
      }}
    /> */}
  </View>
);

Menu.propTypes = {
  navigator: PropTypes.object,
  drawer: PropTypes.object,
  checkedIn: PropTypes.bool,
  driverNumber: PropTypes.string,
  driverName: PropTypes.string,
  _logout: PropTypes.func,
  _fetchVerifyCredentialsFailure: PropTypes.func,
  _clearWatchGeolocation: PropTypes.func,
};

const mapStateToProps = (state) => ({
  navigator: state.navigator,
  drawer: state.drawer.object,
  checkedIn: state.checkIn.status.in,
  driverNumber: state.login.credentials.id,
  driverName: state.profile.driver.name,
});

const mapDispatchToProps = (dispatch) => ({
  _logout: () => dispatch(logout()),
  _fetchVerifyCredentialsFailure: (message) => dispatch(fetchVerifyCredentialsFailure(message)),
  _clearWatchGeolocation: () => dispatch(clearWatchGeolocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
