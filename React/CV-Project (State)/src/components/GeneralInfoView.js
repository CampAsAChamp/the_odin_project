import React from "react";

// class GeneralInfoView extends Component {
const GeneralInfoView = (props) => {
    const { name, email, phone } = props.entry
    let content = null

    if (name.length !== 0 && email.length !== 0 && phone.length !== 0) {
        content = (
            <ul>
                <li><strong>Name: </strong>{name}</li>
                <li><strong>Email: </strong>{email}</li>
                <li><strong>Phone: </strong>{phone}</li>
            </ul>
        );
    }

    return content
}

export default GeneralInfoView;