import React from "react";
import Movie from "./Movie";

export default function MovieReviews({
    movies = [],
    onRemoveMovie = f => f
}) {
    if(!movies.length) return <div>There are no movies to display. Please add a movie.</div>;

    return (
        <div>
            <br/><h1>Movie Reviews</h1><br/>
            {movies.map((movie, i) =>   { {console.log((movies.map()))} return <Movie key={i} info={movie} onRemove={onRemoveMovie} /> })}   
            {console.log(movies)}
                   
        </div>
    );
}   