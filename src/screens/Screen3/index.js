import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Text,
} from './styled';

const Screen3 = () => (
  <Container>
    <Text>Screen 3 Component</Text>
  </Container>
);

Screen3.propTypes = {

};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen3);
