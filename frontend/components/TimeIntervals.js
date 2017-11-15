import React from 'react';
import { connect } from 'react-redux';

class TimeIntervals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={timeIntervalsStyles}
        >
        <div style={hourStyles}>9:00 AM</div>
        <div style={halfHourStyles}>9:30</div>
        <div style={hourStyles}>10:00 AM</div>
        <div style={halfHourStyles}>10:30</div>
        <div style={hourStyles}>11:00 AM</div>
        <div style={halfHourStyles}>11:30</div>
        <div style={hourStyles}>12:00 PM</div>
        <div style={halfHourStyles}>12:30</div>
        <div style={hourStyles}>1:00 PM</div>
        <div style={halfHourStyles}>1:30</div>
        <div style={hourStyles}>2:00 PM</div>
        <div style={halfHourStyles}>2:30</div>
        <div style={hourStyles}>3:00 PM</div>
        <div style={halfHourStyles}>3:30</div>
        <div style={hourStyles}>4:00 PM</div>
        <div style={halfHourStyles}>4:30</div>
        <div style={hourStyles}>5:00 PM</div>
        <div style={halfHourStyles}>5:30</div>
        <div style={hourStyles}>6:00 PM</div>
        <div style={halfHourStyles}>6:30</div>
        <div style={hourStyles}>7:00 PM</div>
        <div style={halfHourStyles}>7:30</div>
        <div style={hourStyles}>8:00 PM</div>
        <div style={halfHourStyles}>8:30</div>
        <div style={hourStyles}>9:00 PM</div>
      </div>
    )
  }
};

const timeIntervalsStyles = {
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  height: 750,
  justifyContent: 'space-between',
  marginRight: 10,
  width: 60,
}

const hourStyles = {
  flex: 1,
  fontFamily: 'lucida grande',
  fontSize: 12,
}

const halfHourStyles = {
  color: '#ececec',
  flex: 1,
  fontFamily: 'lucida grande',
  fontSize: 11,
}

const mapStateToProps = (state) => {
  return {
    times: state.times,
  };
};

export default connect(mapStateToProps, null)(TimeIntervals);
