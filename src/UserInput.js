import React, { Component } from 'react';
import './user-input-style.css'

class UserInput extends Component {
  render() {
    return (
      <div>
          <input 
              className="input"
              type="text"
              onChange={this.props.changed} 
              value={this.props.name} 
            />
      </div>
    );
  }
}

export default UserInput;
