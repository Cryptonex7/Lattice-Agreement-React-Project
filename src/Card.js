import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.width}`}>
        <div className="col-1">
          <h3>User</h3>
          <div className="user-data">
            <p className="subtitle"><strong>{this.props.Name}</strong></p>
            <p>Email : {this.props.Email}</p>
            <p>Ph.No.: {this.props.PhNo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;