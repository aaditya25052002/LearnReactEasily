import React, { useState } from "react";

const Reactformeasy = () => {
    const state = useState();
  const [fullname, setName] = useState({
    fname: "",
    lname: "",
  });
  const change = (e) => {
    const value = e.target.value;
    const naam = e.target.name;
    setName((prevalue) => {
      if (naam === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
        };
      } else {
        return {
          lname: value,
          fname: prevalue.fname,
        };
      }
    });
  };
  const onsubmit = (e) => {
    e.preventDefaults();
    alert("form submit");
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <h1>helloo {fullname.fname} {fullname.lname}</h1>
        <input
          type="text"
          placeholder="what is your first name"
          name="fname"
          onChange={change}
          value={fullname.fname}
        />
        <br />
        <input
          type="text"
          placeholder="what is your last name"
          name="lname"
          onChange={change}
          value={fullname.lname}
        />
      </form>
    </>
  );
};
//////////////////////////////////////  or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const Reactformeasy1 = () => {
    const state = useState();
  const [fullname, setName] = useState({
    fname: "",
    lname: "",
  });
  const change = (e) => {
   const {name, value} = e.target;
    setName((prevalue) => {
        return{
      ...prevalue,
      [ name ] : value,
        }
    });
  };
  const onsubmit = (e) => {
    e.preventDefaults();
    alert("form submit");
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <h1>helloo {fullname.fname} {fullname.lname}</h1>
        <input
          type="text"
          placeholder="what is your first name"
          name="fname"
          onChange={change}
          value={fullname.fname}
        />
        <br />
        <input
          type="text"
          placeholder="what is your last name"
          name="lname"
          onChange={change}
          value={fullname.lname}
        />
      </form>
    </>
  );
};
export default Reactformeasy;
export {Reactformeasy1};