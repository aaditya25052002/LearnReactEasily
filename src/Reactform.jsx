import React, { useState } from 'react';

const Reactform = () => {
    
    const state = useState();
    const [name,changename] = useState("");
    const [fullname, setname] = useState();
    const wait = (event) => {
          changename(event.target.value);
    }
    const done = (e) => {
        e.preventDefault();
          setname(name);
    }
    return (
    <>
    <form onSubmit={done}>
    <h1>Heloo {fullname}</h1>
    <input type="text" placeholder='what is your name' value={name} onChange = {wait} />
    <button type = 'submit'>CLick me</button>
    </form>
    </>

    );
}
export default Reactform;
