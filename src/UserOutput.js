import React, { Component } from 'react';

class UserOutput extends Component {
  render() {
  	const style = {
  		backgroundColor: '#a20000',
  		color: '#fff',
  		lineHeight: '36px',
  		fontSize: '20px',
  		borderRadius: '5px',
  		cursor: 'pointer',
  		padding: '10px'
  	}

    return (
      <div className="block">
        	<p>New name: {this.props.ename}</p> 
        	<p>Start name: {this.props.name}</p>
        	<span onClick={this.props.click} style={style}>Change to Start Name</span> 

      </div>
    );
  }
}

export default UserOutput;

