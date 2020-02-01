import React from 'react';
import './TitleLeft.css';

class TitleLeft extends React.Component {
    render() {
      return (
        <div className="titleLeft">
          <p> {this.props.title} </p>
        </div>
      );
    }
  }
  export default TitleLeft;