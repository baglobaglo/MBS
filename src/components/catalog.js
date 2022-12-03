import React, { useEffect, useState } from 'react';
import './catalog.css';
import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentMovies from './current-movies';
import UpcomingMovies from './upcoming-movies';
import Purchase from './purchase';

const Catalog = () => {
  const [currentMovies, setCurrentMovies] = useState([
    {
      Title: 'StarWars the fall of Tommy dang',
      ReleaseDate: '1998',
      Price: '40$',
      Description: 'Funny movie for friends and family',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: 'StarTrek rise of Gaylor',
      ReleaseDate: '1999',
      Price: '50$',
      Description: 'Not funny',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1027068197544931328/DangMatic.png?width=200&height=300',
    },
    {
      Title: 'Test3',
      ReleaseDate: '2000',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: 'Test4',
      ReleaseDate: '2001',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
  ]);

  const [upcomingMovies, setUpcomingMovies] = useState([
    {
      Title: '',
      ReleaseDate: '',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: '',
      ReleaseDate: '',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: '',
      ReleaseDate: '',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: '',
      ReleaseDate: '',
      Price: '',
      Description: '',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
  ]);
  const [movieClicked, setMovieClicked] = useState('none');
  const [movieClickedObject, setMovieClikedObject] = useState();
  const [clikedPurchase, setClickedPurchase] = useState(false);

  const handlePurchaseButton = () => {
    setClickedPurchase(true);
    setMovieClikedObject();
  };

  const moreInformation = (Title) => {
    setMovieClicked(Title);
  };

  useEffect(() => {
    const info = currentMovies.find(
      (movie) => movie.Title === movieClicked
    );
    setMovieClikedObject(info);
  }, [movieClicked, currentMovies]);

  return (
    <div className="container-fluid mbs-show">
      {movieClicked === 'none' && (
        <div className="container-fluid mbs-show">
          <h2> Current movies</h2> <br />
          <div className="row">
            <CurrentMovies
              currentMovies={currentMovies}
              moreInformation={moreInformation}
            />{' '}
            <br />
          </div>
          <h2> Upcoming Moives</h2> <br />
          <div className="row">
            <UpcomingMovies upcomingMovies={upcomingMovies} /> <br />
          </div>{' '}
        </div>
      )}
      {movieClickedObject && movieClicked !== 'none' && (
        <div>
          <div>
            <h1>{movieClickedObject.Title}</h1> <br />
            <img
              src={movieClickedObject.Poster}
              alt="failed to load"
            ></img>
            <p>
              Movie was released: {movieClickedObject.ReleaseDate}
            </p>
            <p>Price pr. ticket: {movieClickedObject.Price}</p>
            <h5>Description:</h5>
            <p>{movieClickedObject.Description}</p>
          </div>
          <button onClick={handlePurchaseButton}>
            Click here to buy tickets!
          </button>
        </div>
      )}
      {clikedPurchase && (
        <div>
          <Purchase />
        </div>
      )}
    </div>
  );
};

export default Catalog;
