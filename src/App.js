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
      <p>Current time from server: {time}</p>
    </div>
  );
}

export default App;
