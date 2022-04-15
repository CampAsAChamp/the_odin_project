// Should render our tasks

import React, { Component } from "react";
import uniqid from "uniqid";


class Overview extends Component {
    render() {
        const { tasks } = this.props;

        return (
            <ul>
                {tasks.map((task) => {
                    return <li key={uniqid()}>{task}</li>;
                })}
            </ul>
        );
    }
}


export default Overview;