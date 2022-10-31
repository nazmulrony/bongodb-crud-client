import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User successfully added')
                    event.target.reset();
                }
            })

    }
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h3>Please add new user</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleOnBlur} type="text" name="name" placeholder='name' required />
                <br />
                <input onBlur={handleOnBlur} type="text" name="address" placeholder='address' required />
                <br />
                <input onBlur={handleOnBlur} type="email" name='email' placeholder='email' required />
                <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;