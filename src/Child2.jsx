import React from 'react';
import { useContext } from 'react';
import Child3 from './Child3';
import { FirstName, LastName } from './Parent';


// use the useContext to remove the consumer complexities 
const Child2 = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return <h1>My name is {fname} {lname}</h1>;
}
export default Child2;