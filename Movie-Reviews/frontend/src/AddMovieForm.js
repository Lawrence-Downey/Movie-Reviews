import { React, useState } from "react";

export default function AddMovieForm({ onNewMovie =f => f }) {
    const [formData, setformData] = useState({
        movieTitle:"",
        date:"",
        actors:[],
        ratings:0,
        poster: ""
        
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filename = formData.poster.replace("C:\\fakepath\\", "./static");
        

        onNewMovie(formData.movieTitle, formData.date, formData.actors.split(","), formData.ratings, filename)  
        alert(`Movie Review for ${formData.movieTitle} has sucessfully been added!`)  
    }
    
    return(
        
        <form onSubmit={handleSubmit}>
            <h3>Please complete the form below to add your Movie Review</h3>
            <br/>
            <div>
                <label>Movie Title: </label>
                <input type="text" name="movieTitle" onChange={handleChange} value={formData.movieTitle} 
                placeholder="Starship Troopers" required/>
            </div>
            <br/>
            <div>
                <label>Release Date: </label>
                <input type="text" name="date" onChange={handleChange} value={formData.date} placeholder="Eg. September 19, 2012" required/>
            </div>
            <br/>
            <div>
                <label>Actors: </label>
                <input type="text" name="actors" onChange={handleChange} value={formData.actors} 
                placeholder="Crystal Ball, Chester Field" required/>
            </div>
            <br/>
            <div>
                <label>Ratings: </label>
                <input type="text" name="ratings" onChange={handleChange} value={formData.ratings} placeholder="Scale of 0-10" required/>
            </div>
            <br />
            <p><input type="file" name="poster" onChange={handleChange} value={formData.poster} id="file" 
                accept=".png, .jfif, .jpg, .jpeg" required/></p>
            <br/>
            <button type="submit">Add Movie</button>
        </form>
    );
}
