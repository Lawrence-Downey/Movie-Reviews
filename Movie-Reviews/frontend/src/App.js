import "./App.css";
import React, { useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom";
import AddMovieForm from "./AddMovieForm";
import MovieReviews from "./MovieReviews";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('/api/movies')
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      })
    .catch((err) => {
      setError(err);
    })
    .finally( () => {
      setLoading(false);
    });
  }, []);

  const removeMovie = poster => {
    const newMovies = movies.filter(movie => movie.poster !== poster);
    setMovies(newMovies);
  }

  const AddMovie = (movieTitle, date, actors, ratings, poster) => {
    const newMovies = [
        ...movies,
        {
            movieTitle,
            date,
            actors,
            ratings,
            poster
        }   
    ];
    setMovies(newMovies)   
  }
  if(loading){
    return <p>Data is loading...</p>
  }
  if(error || !Array.isArray(movies)) {
    return <p>There was error loading your data!</p>
  }

  return (
    <>
      <div className='App'>
        <nav>
            <Link to="/"><img src="./static/house.png" alt="Picture of a house for the HOME link" style={{width: 35, height: 35}}/></Link>
            <Link to="/AddMovie"> Add Movies </Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieReviews setMovies={movies} onRemoveMovie={removeMovie}/>} />
          <Route path="/AddMovie" element={<AddMovieForm onNewMovie={AddMovie} />} />
        </Routes>
      </div>
    </>   
  );
}