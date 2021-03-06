import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';

import {
  Container,
  Text,
} from './styled';

class Screen2 extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    const { navigator } = this.props;
    Icon.getImageSource('ios-close', 40, colors.text.gray).then((source) => navigator.setButtons({
      leftButtons: [
        {
          id: 'close',
          icon: source,
          disableIconTint: true,
        },
      ],
    }));
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;

    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        navigator.dismissModal({ animationType: 'slide-down' });
      }
    }
  }

  render() {
    const { navigator } = this.props;
    return (
      <Container>
        <Text
          onPress={() => {
            navigator.push({
              screen: 'aprn.Screen3',
            });
          }}
        >Screen 2 Component (Press Me!)</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
