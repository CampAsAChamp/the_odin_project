import React, { Component } from "react";

class GeneralInfoView extends Component {
    render() {
        const { name, email, phone } = this.props.entry
        if (name.length === 0 || email.length === 0 || phone.length === 0) {
            return (
                <div></div>
            );
        }
        else {
            return (
                <ul>
                    <li><strong>Name: </strong>{name}</li>
                    <li><strong>Email: </strong>{email}</li>
                    <li><strong>Phone: </strong>{phone}</li>
                </ul>
            );
        }
    }
}

export default GeneralInfoView;