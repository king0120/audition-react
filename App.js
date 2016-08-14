import React from 'react';
import Nav from './components/navbar';

class App extends React.Component {
  

  render(){
    let divStyle = {
      background: '#E4E4E4',
      height: '100vh',
      width: '100vw' 
    };
    return ( 
      <div style={divStyle}>
        <Nav />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;