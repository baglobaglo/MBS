import React from 'react';
import './movies.css';

const UpcomingMovies = (props) => {
  return (
    <>
      {props.upcomingMovies.map((upcomingMovies, index) => (
        <div className="image-container d-flex justify-content-start m-3 width-movies">
          <img src={upcomingMovies.Poster} alt="movie"></img>
          {props.isAdmin && (
            <div
              className="d-flex align-items-center justify-content overlay-delete"
              onClick={() => {
                props.deleteMovieUpComing(upcomingMovies.Title);
              }}
            >
              Delete
            </div>
          )}
          <div
            onClick={() => {
              props.moreInformationUpComing(upcomingMovies.Title);
            }}
            className="overlay d-flex align-items-center justify-content"
          >
            <h6>Info coming: </h6> <br />
            <p>{upcomingMovies.ReleaseDate}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingMovies;
