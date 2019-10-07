import React, { Component } from "react";
import "./App.css";
import Counters from "./components/countersComponent";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor(props) {
    //la app va iniciando
    super();
  }
  componentDidMount() {
    // cuando la app ya esta
    //ajax call
    //this.setState({})
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    //cuando va cargando
    return (
      <React.Fragment>
        <div className="App">
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
