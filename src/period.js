import React from 'react';
import './period.css';

class Period extends React.Component {
    render() {
      return (
          <div className="period">
            <div className="periodLeft">
                <p id="date1"> {this.props.date1} </p>
                <p id="date2"> {this.props.date2} </p>
            </div>
            <div className="periodRight">
                <p id="title1"> {this.props.title1} </p>
                <p id="title2"> {this.props.title2} </p>
                <p id="title3"> {this.props.title3} </p>
            </div>
        </div>
      );
    }
  }
  export default Period;