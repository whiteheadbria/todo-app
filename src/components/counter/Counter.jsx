import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component {
    // Defines inital state in a constructor
    // state => counter 0

constructor () {
    super(); // Error 1

    this.state = {
        counter: 0
    }

    this.increment = this.increment.bind(this);
}

    render() { //what we're returning back
    return (
        <div className="counter">
            <button onClick={this.increment}> + {this.props.by} </button>
            <span className="count">{this.state.counter}</span>
        </div>
    )
}

// Update state - counter++ 
// console.log('increment')
increment() { 
    this.setState ( {
    counter: this.state.counter + this.props.by
});

}
}

export default Counter