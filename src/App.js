import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/sse');
    console.log(eventSource);
    eventSource.onmessage = (event) => {
      setTime(event.data);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center",color:"red"}}>Server side Event handling </h1> 
      <p>Current time from server: {time}</p>
      <span>------------------ adam Shaikh--------------------------- </span>
    </div>
  );
}

export default App;
