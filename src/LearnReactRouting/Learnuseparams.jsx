
import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const Learnuseparams = () => {
       const { fname } = useParams();
       const location = useLocation();
       const history = useNavigate();
       console.log(history);
       return( 
        <>
        <h1>my location is {location.pathname}</h1>
       <h1>hello {fname}</h1>
       {location.pathname === "/learn/aditya" ? <button onClick={()=>{history(-1)}}>u got me</button> : null}
       </>
       );
}
export default Learnuseparams;
// useNavigate() is used to navigate between pages where the history(-1,-2,1,2) represnts if how many pages you want to go forward or backward