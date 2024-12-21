import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/') // Assuming FastAPI runs on port 8000
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Optionally, you can set an error message here
        setMessage('Error loading message');
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;