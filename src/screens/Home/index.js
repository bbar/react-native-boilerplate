import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';

import {
  Container,
  Text,
} from './styled';

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    const { navigator } = this.props;
    Icon.getImageSource('ios-menu', 40, colors.text.gray).then((source) => navigator.setButtons({
      leftButtons: [
        {
          id: 'menu',
          icon: source,
          disableIconTint: true,
        },
      ],
    }));
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;

    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'menu') {
        navigator.toggleDrawer({
          side: 'left',
          animated: true,
        });
      }
    }

    if (event.type === 'DeepLink') {
      const parts = event.link.split('/'); // Link parts

      switch (parts[0]) {
        case 'Home':
          navigator.showModal({
            screen: 'aprn.Home',
            animationType: 'slide-up',
            title: 'Home',
          });
          break;
        case 'Screen1':
          navigator.showModal({
            screen: 'aprn.Screen1',
            animationType: 'slide-up',
            title: 'Screen 1',
          });
          break;
        case 'Screen2':
          navigator.showModal({
            screen: 'aprn.Screen2',
            animationType: 'slide-up',
            title: 'Screen 2',
          });
          break;
        case 'Screen3':
          navigator.showModal({
            screen: 'aprn.Screen3',
            animationType: 'slide-up',
            title: 'Screen 3',
          });
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <Container>
        <Text>Home Component</Text>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
