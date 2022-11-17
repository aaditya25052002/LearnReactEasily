import React from 'react';
import { FirstName, LastName } from './Parent';

// jaha par kaam ho waha par consume karwa lo
const Child3 = () => {
     return (
          <>
          <FirstName.Consumer>
               {
                    (fname) =>{
                         return (
                              <LastName.Consumer>
                                   {
                                        (lname) => {
                                            return (<h1>My name is {fname} {lname}</h1>);
                                        }
                                   }
                              </LastName.Consumer>
                         );
                    }
               }
          </FirstName.Consumer>
          </>
     );
}
export default Child3;