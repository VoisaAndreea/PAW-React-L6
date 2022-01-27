import axios from "axios";
import React, { useState } from "react";
import ReactDOM from 'react-dom';

export default function Button() {
    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);
  
    // Create handleIncrement event handler
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
      notifyServer();
    };

  
    // Notifies the server about the change
    // const notifyServer = () => {
    //     axios.post('/button', {
    //         message: 'Counter Updated!',
    //     })
    // }
  
    return (
      <div>
          <button onClick={handleIncrement}>De cate ori poti apasa?</button>
          <span> {count} </span>
      </div>
    );
  }
  
  if (document.getElementById('button')) {
      ReactDOM.render(<Button />, document.getElementById('button'));
  }