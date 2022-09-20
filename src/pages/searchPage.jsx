import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import LoadingState from "../components/LoadingState";
import OnStart from "../components/OnStart";
import axios from "axios";


function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchResult, setId] = useState();
  const [loading, setLoading] = useState();
  const [order, setOrder] = useState();
  function searchId(event) {
    setId(event.target.value);
  }

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=8ee750b&s=${searchResult}`
    );
    const { Search } = data;
    setMovies(Search);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    console.log(movies);
  }, []);

  let moviesArr = movies
    .map((movie) => (
      <Movie
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        image={movie.Poster}
        imId={movie.imdbID}
      />
    ))
    .slice(0, 6);

  
  function sortMovies(event) {
    setOrder(event.target.value);

    let orderOptions =
      order === "high_to_low"
        ? movies.sort((a, b) =>  a.Year - b.Year)
        : movies.sort((a, b) => b.Year - a.Year)

console.log(orderOptions)

      
  }

  return (
    <>
      <Header
        searchResult={searchId}
        result={searchResult}
        click={fetchMovies}
      />

      <main>
        <div className="search__container ">
          <h2 >
            Search results for:
            <span className="spanResult color--text"> {searchResult} </span>
          </h2>

          <select id="sort_bar" onClick={sortMovies}>
            <option value="" selected>
              -- Sort By Year --
            </option>
            <option value="high_to_low">Most recent</option>
            <option value="low_to_high">older</option>
          </select>
        </div>

        <div className="movies">
          {movies.length === 0 && <OnStart />}
          {movies.length != 0 && loading ? <LoadingState /> : moviesArr}
         
        </div>
      </main>
    </>
  );
}

export default SearchPage;
