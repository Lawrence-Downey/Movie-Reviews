import React from 'react';

export default function Movie({
    movieTitle,
    date,
    actors,
    ratings,
    poster,
    onRemove = f => f
}) {
    return (
    <>
      <br/>  
      <h2>{movieTitle}</h2>
      <img className="poster" src={poster} alt={"Movie poster for " + movieTitle}/><br/>
      <i>Release Date: {date}</i><br/>
      <p>Starring: </p>
      {actors.map( (actor, j) => { return <p key={j}>{actor}</p>}) }
      <p>Ratings: {ratings}<b className="star">★</b></p>
      <button onClick={() => onRemove(poster)}>
          Remove Movie
      </button>
      <br/>
    </>
    )
}