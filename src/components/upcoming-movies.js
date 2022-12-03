import React from 'react';
import './movies.css';

const UpcomingMovies = (props) => {
  return (
    <>
      {props.upcomingMovies.map((upcomingMovies, index) => (
        <div className="image-container d-flex justify-content-start m-3 width-movies">
          <img src={upcomingMovies.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content">
            <h3>More info</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingMovies;
