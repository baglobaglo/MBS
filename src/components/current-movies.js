import React from 'react';
import './movies.css';

const CurrentMovies = (props) => {
  return (
    <>
      {props.currentMovies.map((currentMovies, index) => (
        <div className="d-flex justify-content-start m-3 width-movies">
          <img src={currentMovies.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default CurrentMovies;
