import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function App(){
    return (
    <>
    <h1>Netflix</h1>
    <div className= "design">
    <Card 
    img = "https://wallpapercave.com/wp/wp10727659.jpg"
    title = "Peaky blinders"

     />
    <Card 
    img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1ljYODfL90xB_kNDp8wCoVEehvxaE9snFQ&usqp=CAU"
    title = "Naruto"/>
    <Card 
    img = "https://resizing.flixster.com/qxCTpAWvvb6Y8cPJEFq_hafm5zc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw"
    title = "13 Reasons Why"/>
    <Card 
    img = "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg"
    title = "The Office"/>
    </div>
    </>
    );
    
}
export default App;