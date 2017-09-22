import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Text,
} from './styled';

const JobDetails = () => (
  <Container>
    <Text>JobDetails Component</Text>
  </Container>
);

JobDetails.propTypes = {

};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
