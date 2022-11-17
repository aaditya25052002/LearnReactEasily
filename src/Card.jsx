import React from 'react';

//https://wallpapercave.com/wp/wp10727659.jpg
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1ljYODfL90xB_kNDp8wCoVEehvxaE9snFQ&usqp=CAU
//https://resizing.flixster.com/qxCTpAWvvb6Y8cPJEFq_hafm5zc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw
//https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg

function Card(props)
{
    return (
    <>
    <div className = "cards">
        <div className= "cardsi">
             <img src= {props.img} alt="ah sorry the server is pretty fucked up" />
             <div className="classinfo">
                <h3 className="cardtitle">{props.title}</h3>
                <a href=""><button className="submit">Watch now</button></a>
             </div>
        </div>
    </div>
    </>
    );
}

export default Card;