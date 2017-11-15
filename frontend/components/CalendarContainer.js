import React from 'react';
import { connect } from 'react-redux';

import TimeIntervals from './TimeIntervals'
import EventsContainer from './EventsContainer'

import { setTimes } from '../actions/index';

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.layOutDays = (events) => {
      if (!events) this.props.setTimes([])
      else this.props.setTimes(events)
    }
  }

  render() {
    return (
      <div
        style={calendarContainerStyles}
        >
        <TimeIntervals />
        <EventsContainer />
      </div>
    );
  }
};

const calendarContainerStyles = {
  display: 'flex',
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTimes: (events) => dispatch(setTimes(events)),
  };
};

export default connect(null, mapDispatchToProps)(CalendarContainer);
