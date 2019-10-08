import React from 'react';
import './App.css';
import StartWizard from './components/startwizard';
import FlightQuotes from './components/flightquotes'

class App extends React.Component {
  state = {}

  completeForm = (value) => {
    
    this.setState({...value})
    console.log('got values', this.state);
  }
  render() {
  return (
    <div>
      {this.state.maxPrice ? <FlightQuotes/> : <StartWizard onComplete={this.completeForm}/>}
    </div>
  );
}
}

export default App;
