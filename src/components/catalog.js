import React, { useEffect, useState } from 'react';
import './catalog.css';
import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentMovies from './current-movies';
import UpcomingMovies from './upcoming-movies';
import { useNavigate } from 'react-router-dom';
//import Purchase from './purchase';

const Catalog = () => {
  const [currentMovies, setCurrentMovies] = useState([
    {
      Title: 'Black Adam',
      ReleaseDate: '10/21/22',
      Price: '$8.25',
      Description:
        'SYNOPSIS: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. \n CAST: Dwayne Johnson, Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari \n RUNTIME: 125 minutes \n CRITICS CONSENSUS: Black Adam may end up pointing the way to an exciting future for DC films, but as a standalone experience, it is a wildly uneven letdown. \n AUDIENCE SAYS: With lots of action, solid effects, and a story you do not have to be a comics fan to follow, Black Adam is one of the best DC movies to date.',
      Poster:
        'https://www.filmsxpress.com/images/posters/459/Adam.png',
    },
    {
      Title: 'Smile',
      ReleaseDate: '9/30/22',
      Price: '$8.25',
      Description:
        "SYNOPSIS: After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can not explain. She must confront her troubling past in order to survive and escape her horrifying new reality. \n CAST: Sosie Bacon, Jessie T. Usher, Kyle Gallner, Robin Weigert, Caitlin Stasey \n RUNTIME: 116 minutes \n CRITICS CONSENSUS: Deeply creepy visuals and a standout Sosie Bacon further elevate Smile's unsettling exploration of trauma, adding up to the rare feature that satisfyingly expands on a short. \n AUDIENCE SAYS: You may need to pay close attention in order to keep up with the story, but fans of slow-burning horror should leave Smile with a grin.",
      Poster:
        'https://www.filmsxpress.com/images/posters/459/Smile.png',
    },
    {
      Title: 'Black Panther: Wakanda Forever',
      ReleaseDate: '11/11/22',
      Price: '$8.25',
      Description:
        "SYNOPSIS: Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje, fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda. \n CAST: Letitia Wright, Angela Bassett, Lupita Nyong'o, Danai Gurira, Winston Duke \n RUNTIME: 161 minutes \n CRITICS CONSENSUS: A poignant tribute that satisfyingly moves the franchise forward, Black Panther: Wakanda Forever marks an ambitious and emotionally rewarding triumph for the MCU. \n AUDIENCE SAYS: Black Panther: Wakanda Forever says a solemn goodbye to one of the MCU's most beloved stars without skimping on the action.",
      Poster: 'https://www.movienewsletters.net/photos/297863H1.jpg',
    },
    {
      Title: 'The Menu',
      ReleaseDate: '11/18/22',
      Price: '$8.25',
      Description:
        "SYNOPSIS: A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises. \n CAST: Anya Taylor-Joy, Ralph Fiennes, Nicholas Hoult, John Leguizamo, Janet McTeer \n RUNTIME: 107 minutes \n CRITICS CONSENSUS: While its social commentary relies on basic ingredients, The Menu serves up black comedy with plenty of flavor. \n AUDIENCE SAYS: The Menu's got a great cast and plenty of fun moments, although the ending might strike some as a little tough to swallow.",
      Poster:
        'https://www.filmsxpress.com/images/posters/459/The%20Menu%20.png',
    },
  ]);

  const [upcomingMovies, setUpcomingMovies] = useState([
    {
      Title: 'Avatar: The Way of Water',
      ReleaseDate: '12/16/22',
      Price: '$8.25',
      Description:
        'SYNOPSIS: "Avatar The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure. \n CAST: Zoe Saldana, Sigourney Weaver, Sam Worthington, Stephen Lang \n RUNTIME: 192 minutes',
      Poster:
        'https://www.filmsxpress.com/images/posters/459/Avatar%202.png',
    },
    {
      Title: 'Babylon',
      ReleaseDate: '12/23/22',
      Price: '$8.25',
      Description:
        'SYNOPSIS: From Damien Chazelle, BABYLON is an original epic set in 1920s Los Angeles . A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood. \n CAST: Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo \n RUNTIME: 188 minutes',
      Poster:
        'https://www.filmsxpress.com/images/posters/459/babylon.png',
    },
    {
      Title: 'Plane',
      ReleaseDate: '1/13/23',
      Price: '$8.25',
      Description:
        'SYNOPSIS: In the white-knuckle action movie PLANE, pilot Brodie Torrance saves his passengers from a lightning strike by making a risky landing on a war-torn island - only to find that surviving the landing was just the beginning. \n CAST: Gerard Butler, Daniella Pineda, Tony Goldwyn, Mike Colter, Yoson An \n RUNTIME: 107 minutes',
      Poster:
        'https://www.filmsxpress.com/images/posters/459/Plane.png',
    },
    {
      Title: 'I Wanna Dance With Somebody',
      ReleaseDate: '12/21/22',
      Price: '$8.25',
      Description:
        "SYNOPSIS: Naomi Ackie stars as Whitney Houston in the musical biopic, which is based on the epic life and music of the iconic singer. The film will take audiences on an emotional, energetic journey through Houston's career and music. \n CAST: Naomi Ackie, Stanley Tucci, Ashton Sanders, Tamara Tunie, Nafessa Williams \n RUNTIME: 146 minutes",
      Poster:
        'https://www.filmsxpress.com/images/posters/459/Wanna%20Dance.png',
    },
  ]);
  const [movieClicked, setMovieClicked] = useState('none');
  const [movieClickedUpComing, setMovieClickedUpComing] =
    useState('none');
  const [movieClickedObject, setMovieClikedObject] = useState();
  const [movieClickedObjectUpComing, setMovieClikedObjectUpComing] =
    useState();

  const [isAdmin, setIsAdmin] = useState(false);
  const [removeButton, setRemoveButton] = useState(true);
  const buytickets = useNavigate();
  const makereview = useNavigate();

  const refreshCatalog = () => {
    setMovieClicked('none');
    setMovieClickedUpComing('none');
  };
  const ToReview = () => {
    makereview('/review');
  };
  const handlePurchaseButton = () => {
    setMovieClikedObject();
    buytickets('/purchase');
  };

  const activeAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const moreInformation = (Title) => {
    setMovieClicked(Title);
    setRemoveButton(false);
  };

  const moreInformationUpComing = (Title) => {
    setMovieClickedUpComing(Title);
    setRemoveButton(false);
  };

  const deleteMovie = (Title) => {
    setCurrentMovies((current) =>
      current.filter((currentMovies) => {
        return currentMovies.Title !== Title;
      })
    );
  };

  const deleteMovieUpComing = (Title) => {
    setUpcomingMovies((upcoming) =>
      upcoming.filter((upcomingMovies) => {
        return upcomingMovies.Title !== Title;
      })
    );
  };

  useEffect(() => {
    const info = currentMovies.find(
      (movie) => movie.Title === movieClicked
    );
    setMovieClikedObject(info);

    const infoUp = upcomingMovies.find(
      (movieUp) => movieUp.Title === movieClickedUpComing
    );
    setMovieClikedObjectUpComing(infoUp);
  }, [
    movieClicked,
    currentMovies,
    upcomingMovies,
    movieClickedUpComing,
  ]);

  return (
    <div className="container-fluid mbs-show">
      {!isAdmin && removeButton && (
        <div className="adminButton">
          <button onClick={activeAdmin}>Activate Admin</button>
        </div>
      )}
      {isAdmin && (
        <div>
          <h1>System Manager</h1> <br />
          <div className="admin-details-container-fluid">
            <div style={{ padding: '20px' }}>
              <h5>Ticket Information</h5>
              <p>
                {' '}
                Black Adam: 73 tickets left <br />
                Smile: 54 tickets left <br />
                Black Panther: 39 tickets left <br />
                The Menu: 62 tickets left <br />
              </p>
            </div>
            <div style={{ padding: '20px', marginLeft: '300px' }}>
              <h5>Employee Information</h5>
              <p>
                {' '}
                Lubbock: 22 employees <br />
                Amarillo: 15 employees <br />
                San Antonio: 19 employees <br />
                Odessa: 9 employees (Understaffed) <br />
              </p>
            </div>
            <div style={{ padding: '20px', marginLeft: '290px' }}>
              <h5>User Information</h5>
              <p>
                {' '}
                Active: 517 accounts <br />
                Inactive: 43 accounts <br />
              </p>
            </div>
          </div>
        </div>
      )}
      {movieClicked === 'none' && movieClickedUpComing === 'none' && (
        <div className="container-fluid mbs-show">
          <h2> Current movies</h2> <br />
          <div className="row">
            <CurrentMovies
              isAdmin={isAdmin}
              currentMovies={currentMovies}
              moreInformation={moreInformation}
              deleteMovie={deleteMovie}
            />
            <br />
          </div>
          <h2> Upcoming Movies</h2> <br />
          <div className="row">
            <UpcomingMovies
              isAdmin={isAdmin}
              upcomingMovies={upcomingMovies}
              moreInformationUpComing={moreInformationUpComing}
              deleteMovieUpComing={deleteMovieUpComing}
            />{' '}
            <br />
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
            <p>Release Date: {movieClickedObject.ReleaseDate}</p>
            <p>Ticket Price: {movieClickedObject.Price}</p>
            <h5>Description:</h5>
            <p className="description-break">
              {movieClickedObject.Description}
            </p>
          </div>
          <button onClick={handlePurchaseButton}>
            Click here to buy tickets!
          </button>
          <br />
          <button onClick={ToReview}> Make Review</button> <br />{' '}
          <br />
          <button onClick={refreshCatalog}>
            {' '}
            Return to Catalog{' '}
          </button>
        </div>
      )}
      {movieClickedObjectUpComing && movieClickedUpComing !== 'none' && (
        <div>
          <div>
            <h1>{movieClickedObjectUpComing.Title}</h1> <br />
            <img
              src={movieClickedObjectUpComing.Poster}
              alt="failed to load"
            ></img>
            <p>
              Release Date: {movieClickedObjectUpComing.ReleaseDate}
            </p>
            <p>Ticket Price: {movieClickedObjectUpComing.Price}</p>
            <h5>Description:</h5>
            <p className="description-break">
              {movieClickedObjectUpComing.Description}
            </p>
            <button onClick={refreshCatalog}>
              {' '}
              Return to Catalog{' '}
            </button>
          </div>

          <br />
        </div>
      )}
    </div>
  );
};

export default Catalog;
