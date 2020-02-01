import React from 'react';
import './skill.css';

class Skill extends React.Component {
    render() {
      return (
        <div className="skill">
        
            <p> {this.props.title} </p>
            <svg width="80%" height="10px">
                <rect width="100%" height="100%" fill="#017C73" />
                <rect width={this.props.pourcentage} height="100%" fill="white" />
            </svg>

        </div>
      );
    }
  }
  export default Skill;