import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component{
  //class constructor that allows us to add local state within our class:
  constructor(props){ //props refers to inherited data from a parent component
    super(props);
    this.state={
        deadline: 'December 25, 2017',
        newDeadline: ''
    }
  }
  //setState method called to update state dynamically:
  changeDeadline(){ //never mutate or change date directly, like: this.state.deadline = 'November 25, 2017'
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
