import React from 'react';
import './movies.css';

const CurrentMovies = (props) => {
  return (
    <>
      {props.currentMovies.map((currentMovies, index) => (
        <div className="image-container d-flex justify-content-start m-3 width-movies">
          <img src={currentMovies.Poster} alt="movie"></img>
          {props.isAdmin && (
            <div
              className="d-flex align-items-center justify-content overlay-delete"
              onClick={() => {
                props.deleteMovie(currentMovies.Title);
              }}
            >
              Delete
            </div>
          )}
          <div
            onClick={() => {
              props.moreInformation(currentMovies.Title);
            }}
            className="overlay d-flex align-items-center justify-content"
          >
            <h3>More info</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default CurrentMovies;
