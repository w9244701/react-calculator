import React, { Component } from 'react';

class MyName extends Component{

render(){  
  return (
    <div>
      hello name is {this.props.name} !!
    </div>
  );
};
}

MyName.defaultProps = {
  name: 'Basic Name'
};
export default MyName;