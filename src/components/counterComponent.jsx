import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //Cuando esta cambiando
    //console.log("prevProps", prevProps);
    //console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  componentWillMount() {
    // Cuando se va a quitar el componente
    // console.log('Counter - Unmoun');
  }
  render() {
    const { counter, onIncrement, onDelete } = this.props;

    return (
      <React.Fragment>
        <div>
          <h1>Producto número {counter.id}</h1>
          <span className={this.getBadgeClasses(counter)}>
            {this.formatCount(counter)}
          </span>
          <button onClick={() => onIncrement(counter)}>Aumentar</button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Eliminar
          </button>
        </div>
      </React.Fragment>
    );
  }
  getBadgeClasses(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount(counter) {
    const { value: count } = counter;
    return count === 0 ? <p>Zero</p> : count;
  }
}

export default Counter;
