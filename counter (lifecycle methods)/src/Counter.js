import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props)

        this.state = {
            counter: 0
        }

        this.increment = () => { this.setState({ counter: this.state.counter + 1 }) }
        this.decrement = () => { this.setState({ counter: this.state.counter - 1 }) }
    }

    // Called right after render
    componentDidMount() {
        console.log("Component Did Mount");
        console.log("---------------------");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update");
        console.log("---------------------");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        console.log("---------------------");
    }

    render() {
        console.log("Render");
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <div className='counter'>
                    Counter: {this.state.counter}
                </div>
            </div>
        );
    }
}

export default Counter;