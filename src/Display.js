import React, { Component } from 'react';

class Display extends Component {

  render() {
    return (
      <div>
        <div class="display">{this.state.operator}{this.state.result}</div>  
      </div>
    );
  }
}

export default Display;