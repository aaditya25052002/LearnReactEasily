import React, {useState} from 'react';


const ToDoList = () => {
    
    const state = useState();
    const [name,setname] = useState("");
    const change = (event) => {
        setname(event.target.value);
    }
    const [Items,setitem] = useState([]);
    const submiti = () =>{
           setitem((olditmes) => {
            return  [...olditmes,name]
           });
           setname("");
    }
    const deleteitem = (id) =>{
        setitem((olditmes) => {
            return olditmes.filter((arrElem,index) => {
                return index !== id
            });
        });
    }
   

    return(
    <>
    <h1>To do list</h1>
  
        <input type="text" value = {name} onChange = {change}/>
        <button onClick={submiti}>+</button>
   
    <br />
    <ol>
        {
           Items.map((val,index) =>{
            return (
                <>
                <button onClick={() => {
                    deleteitem(index);
                }}> x </button>
                 <li>{val}</li>
                </>
           )
           })
        }
    </ol>
    </>
    );
}
export default ToDoList;