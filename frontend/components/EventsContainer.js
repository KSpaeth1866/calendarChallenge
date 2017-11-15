import React from 'react';
import { connect } from 'react-redux';

import Event from './Event'

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: bucket/event placement logic


    return (
      <div
        style={eventsContainerStyles}
        >
        {this.props.times.map((time, index) =>
          <Event
            key={index}
            start={time.start}
            end={time.end}
            title={'Sample Item'}
            location={'Sample Location'}
            left={0}
            top={time.start}
            width={120}
            height={60}
          />
        )}
      </div>
    );
  }
};

const eventsContainerStyles = {
  backgroundColor: '#ececec',
  height: 720,
  paddingLeft: 10,
  paddingRight: 10,
  marginTop: 7.5,
  width: 620,
}

const mapStateToProps = (state) => {
  return {
    times: state.times,
  };
};


export default connect(mapStateToProps, null)(EventsContainer);
