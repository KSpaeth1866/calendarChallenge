import React from 'react';



class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const eventStyles = {
      backgroundColor: 'white',
      // border: 'solid #f7f7f7 1px',
      borderLeft: 'solid #3b5998 6px',
      borderRadius: 2,
      height: this.props.height,
      width: this.props.width,
    }
    return (
      <div
        style={eventStyles}
        >
        {this.props.title}
      </div>
    );
  }
};


export default Event;
