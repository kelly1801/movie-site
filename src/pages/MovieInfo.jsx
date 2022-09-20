import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import NavBar from "../components/navBar";
import axios from "axios";


function MovieInfo() {
  const [movie, setMovie] = useState([]);
  const {id} = useParams()
  console.log(id)
  async function fetchMovie() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=8ee750b&s&i=${id}`
    );
    setMovie(data);
 
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <div className="recolor">
        <NavBar />
      </div>
      <main className="film__container">
        <figure className="film__poster">
          <img className="poster-img" src={movie.Poster} alt="movie poster" />
        </figure>
        <div className="film__description">
          <h2>{movie.Title}</h2>
          <h3>Year : {movie.Year}</h3>
          <p>Sipnosis: {movie.Plot}</p>
          <h3>Rating: {movie.imdbRating}</h3>
          <p>Actors: {movie.Actors}</p>
        </div>
      </main>
    </div>
  );
}

export default MovieInfo;
