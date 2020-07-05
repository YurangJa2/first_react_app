import React, {useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState("");
  // useEffect: 기존의 componentDidMount, componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 된다.
  useEffect(() => {
    fetch('/api/hello').then(response => response.text())
                       .then(message => {
                         setMessage(message);
                       });
  }, [])

  return (
    <div>
      <h1>Hello React!</h1>
      <h2>{message}</h2>
    </div>  
  );
}

export default App;
