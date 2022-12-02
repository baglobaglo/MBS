import React from 'react';
import './movies.css';

const UpcomingMovies = (props) => {
  return (
    <>
      {props.upcomingMovies.map((upcomingMovies, index) => (
        <div className="d-flex justify-content-start m-3 width-movies">
          <img src={upcomingMovies.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default UpcomingMovies;
