import React, { useState } from 'react';

const Learn = () => {
    const [change, changeitem] = useState(0);
    const inc = () => {
        let val = change;
        val++;
        changeitem(val);
    }
    const dcr = () => {
         let valu = change;
         valu--;
         changeitem(valu);
    }
    return(
    <>
    <h1>{change}</h1>
    <button onClick={inc}> incr </button>
    <button onClick={dcr}> dcr </button>
    </>);
}
export default Learn;