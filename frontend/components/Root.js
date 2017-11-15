import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import CalendarContainer from './CalendarContainer';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <CalendarContainer />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};
