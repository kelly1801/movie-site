import React from 'react'

function OnStart() {
  return (
    <div className="welcome__div ">
    <h2 className="welcome--text">
      Welcome to Moon movies, search something
    </h2>
    <figure className="welcome__container">
      <img
        src="./popcorn.png"
        className="welcome--img"
        alt="popcorn"
      />
    </figure>
  </div>
  )
}

export default OnStart