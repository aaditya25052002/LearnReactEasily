import React, { createContext } from 'react';
import Child1 from './Child1'
// remember three things for context apis 
//1. createContext()
//2. Provider
//3. Consumer

const FirstName = createContext();
const LastName = createContext();


const Parent = () => {
    return (
        <>
        <FirstName.Provider value={"Aditya"}>
            <LastName.Provider value={"Tiwari"}>
                <Child1 />
            </LastName.Provider>
        </FirstName.Provider>
        </>
    );
}
export default Parent;
export {FirstName, LastName};