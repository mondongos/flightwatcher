import React from 'react';
import './App.css';
import StartWizard from './components/startwizard';
import FlightQuotes from './components/flightquotes'
import {Container} from 'react-bootstrap';

class App extends React.Component {
  state = {}

  completeForm = (value) => {
    
    this.setState({...value})
  }
  render() {
  return (
    <Container className="center-align">
      <h1>FlightWatcher</h1>
      <div>
        {this.state.maxPrice ? <FlightQuotes wizardData={this.state}/> : <StartWizard onComplete={this.completeForm}/>}
      </div>
    </Container>
  );
}
}

export default App;
