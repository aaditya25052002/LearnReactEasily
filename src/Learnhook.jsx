import React, { useState } from 'react';

const Learnhook = () => {
    const state = useState();
    // use to call the usestate to change the state without the class complexities
    const [count, setcount] = useState(0);
    // const[variable, function] = useState(//initial state of the variable)
    const Incnum = () =>{
        setcount(count + 1); // function to set the later states of the variable
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={Incnum}>click me</button>
        </>
    );
}

const Learnhook2 = () => {
    const state = useState();
    let time = new Date().toLocaleTimeString();
    const [ctime,newtime] = useState(time);
    const updatetime = () => {
        time = new Date().toLocaleTimeString();
        newtime(time);
    }
    setInterval(updatetime, 1000);
    return(
        <h1>{time}</h1>
    );
}
export default Learnhook;
export {Learnhook2};