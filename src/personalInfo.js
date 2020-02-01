import React from 'react';
import './personalInfo.css';

class PersnalInfoDetail extends React.Component {
    render() {
      return (
        <div className="PersoDet">
          <p> {this.props.title} </p>
          <p> {this.props.description} </p>
        </div>
      );
    }
  }
  export default PersnalInfoDetail;