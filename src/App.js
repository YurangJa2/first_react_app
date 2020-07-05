import React from 'react';

class App extends React.Component {
  state = {
    message: "default message"
  };
  componentDidMount() {
    fetch('/api/hello').then(response => response.text())
                       .then(message => {
                         this.setState({message});
                       });
  }
  render(){
    console.log(this.state.message);
    return (
      <div>
        <h1>Hello React!</h1>
        <h2>{this.state.message}</h2>
      </div>  
    );
  }
}

export default App;
