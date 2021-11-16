
import React from 'react'

function Hello(props) {  
    return <div>Hello {props.toWhat}</div>;
  }
  
  function HelloWorld() {
    return <Hello toWhat="World" />;
  }

export default Hello
