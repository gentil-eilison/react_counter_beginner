import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'
import React, { Component } from 'react';

//Life Cycle Hooks
// Mounting Phase - When the component is being build. It calls "constructor", "render" and then "componentDidMount". When it is mounted, it is in the DOM
// Updating Phase - When we update the component(props or update change), thus updating into the DOM. It calls "render" and then "componentDidUpdate"
// Unmounting Phase - When we remove the component from the DOM. It calls "componentWillUnmount"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  constructor() {
    super()
    console.log("App - Constructor")
  } 

  componentDidMount() {
    console.log("App - Mounted")
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })

    this.setState({ counters })
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })

  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  render() {
    console.log("App - Rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container"><Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement}
          counters={this.state.counters} /></main>
      </React.Fragment>
    );
  }

}

export default App;
