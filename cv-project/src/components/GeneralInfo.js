import React, { useState } from "react";
import GeneralInfoView from "./GeneralInfoView";

const GeneralInfo = () => {
    const [inputs, setInputs] = useState({
        name: '1',
        email: '2',
        phone: '3',
    })

    const [entry, setEntry] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        setEntry({
            name: inputs.name,
            email: inputs.email,
            phone: inputs.phone,
        })

        setInputs({
            name: '',
            email: '',
            phone: '',
        })

        event.preventDefault();
    }

    const editButtonFunction = (event) => {
        setInputs({
            name: entry.name,
            email: entry.email,
            phone: entry.phone,
        })

        setEntry({
            name: '',
            email: '',
            phone: '',
        })

        event.preventDefault();
    }

    return (
        <div>
            <h2>General Info</h2>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input type="text" name="name" value={inputs.name || ''} onChange={handleInputChange} />
                <label> Email: </label>
                <input type="text" name="email" value={inputs.email || ''} onChange={handleInputChange} />
                <label> Phone: </label>
                <input type="text" name="phone" value={inputs.phone || ''} onChange={handleInputChange} />
                <button onClick={editButtonFunction}>Edit Info</button>
                <button>Submit Info</button>
            </form>
            <GeneralInfoView entry={entry} />
        </div>
    );
}

export default GeneralInfo;