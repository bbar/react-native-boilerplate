import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const LeftDrawer = ({
  navigator,
}) => (
  <DrawerContent>

    <NameContainer>
      {/* <Name>{getUserName(driverName, driverNumber)}</Name> */}
      <Name>Brent Barbata</Name>
    </NameContainer>

    <NavLink
      text="Screen 1"
      icon="sign-in"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Screen1/' });
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'closed',
        });
      }}
    />

    <NavLink
      text="Screen 2"
      icon="briefcase"
      onPress={() => {
        navigator.handleDeepLink({ link: 'Screen2/' });
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
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
