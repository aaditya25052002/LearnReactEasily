import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { NavLink } from 'react-router-dom';
import Leanuseparams from './Learnuseparams';

const New = () => {
    return (
    <>
    <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
    <NavLink exact activeClassName="active_class" to="/About"> About</NavLink>
   <Routes>
    <Route exact path = "/" element = {<Home />} />
    <Route path = "/About" element = {<About />} />
    <Route path = "/Learn/:fname" element = {<Leanuseparams />} />
   </Routes>
   </>);
}
export default New;