import React from 'react';
import './TitleRight.css';

class TitleRight extends React.Component {
    render() {
      return (
        <div className="titleRight">
          <p className="para"> {this.props.title} </p>
        </div>
      );
    }
  }
  export default TitleRight;