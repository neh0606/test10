import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();
    const inputEvent = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    }
    const onSubmit = () => {
        setFullName(name)
    }
    return (
        <>
            <h2>Hello {fullName}</h2>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name} />
            <button
                onClick={onSubmit}>click me</button>
        </>
    )
}

export default Form
