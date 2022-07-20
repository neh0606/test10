import React, { useState } from 'react'

const Form2 = () => {
    const [fullName, setFullName] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        phone: " ",
    })
    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target
        setFullName((preValue) => {
            return {
                ...preValue
                [name] = value
            };
        });
        // setFullName((preValue) => {
        //     if (name === "fname") {
        //         return {
        //             fname: value,
        //             lname: preValue.lname,
        //             email: preValue.email,
        //             phone: preValue.phone,
        //         };
        //     }
        //     else if (name === "lname") {
        //         return {
        //             fname: preValue.fname,
        //             lname: value,
        //             email: preValue.email,
        //             phone: preValue.phone,
        //         };
        //     }
        //     else if (name === "email") {
        //         return {
        //             fname: preValue.fname,
        //             lname: preValue.lname,
        //             email: value,
        //             phone: preValue.phone,
        //         };
        //     }
        //     else if (name === "phone") {
        //         return {
        //             fname: preValue.fname,
        //             lname: preValue.lname,
        //             email: preValue.email,
        //             phone: value,
        //         };
        //     }
        // });
    };
    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    }
    return (
        <>
            <form onSubmit={onSubmits}>
                <div>
                    <h2>Hello{fullName.fname}{fullName.lname}{fullName.email}{fullName.phone}</h2>
                    <input type="text" name="fname" placeholder="Enter Your First name" value={fullName.fname} onChange={inputEvent} />
                    <input type="text" name="lname" placeholder="Enter Your Last name" value={fullName.lname} onChange={inputEvent} />
                    <input type="email" name="email" placeholder="Enter Your Email" value={fullName.email} onChange={inputEvent} />
                    <input type="number" name="phone" placeholder="Enter Your phone number" value={fullName.phone} onChange={inputEvent} />
                    <button type='submit'>Click Me</button>
                </div>
            </form>

        </>
    )
}

export default Form2
