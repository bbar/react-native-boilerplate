import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';

import {
  Container,
  Text,
} from './styled';

class Status extends Component {
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
        case 'CheckIn':
          navigator.showModal({
            screen: 'aprn.CheckIn',
            animationType: 'slide-up',
            title: 'Check In',
          });
          break;
        case 'CheckOut':
          navigator.showModal({
            screen: 'aprn.CheckOut',
            animationType: 'slide-up',
            title: 'Check Out',
          });
          break;
        case 'JobDetails':
          navigator.showModal({
            screen: 'aprn.JobDetails',
            animationType: 'slide-up',
            title: 'Job Details',
          });
          break;
        case 'Jobs':
          navigator.showModal({
            screen: 'aprn.Jobs',
            animationType: 'slide-up',
            title: 'Jobs',
          });
          break;
        case 'Login':
          navigator.showModal({
            screen: 'aprn.Login',
            animationType: 'slide-up',
            title: 'Login',
          });
          break;
        case 'Messages':
          navigator.showModal({
            screen: 'aprn.Messages',
            animationType: 'slide-up',
            title: 'Messages',
          });
          break;
        case 'Performance':
          navigator.showModal({
            screen: 'aprn.Performance',
            animationType: 'slide-up',
            title: 'Performance',
          });
          break;
        case 'Status':
          navigator.showModal({
            screen: 'aprn.Status',
            animationType: 'slide-up',
            title: 'Status',
          });
          break;
        case 'Vehicles':
          navigator.showModal({
            screen: 'aprn.Vehicles',
            animationType: 'slide-up',
            title: 'Vehicles',
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
        <Text>Status Component</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Status);
