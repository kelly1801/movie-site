import React from 'react'

function Movie({image, year, title, imId}) {
  return (
    <div className="movie__container">
    <figure className="img--wrapper">
      <img src={image} className="movies--img"/>
      <figcaption className="movie_description">
        <h3 className="movie__title">Title: {title}</h3>
        <h3 className="movie__year">Year: {year}</h3>
        <h4 className="movie__imdb">imdbID: {imId}</h4>
      </figcaption>
    </figure>
</div> 
  )
}

export default Movie