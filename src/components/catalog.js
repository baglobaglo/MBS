import React, { useState } from 'react';
import './catalog.css';
import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentMovies from './current-movies';
import UpcomingMovies from './upcoming-movies';

const Catalog = () => {
  const [currentMovies, setCurrentMovies] = useState([
    {
      Title: 'Test',
      ReleaseDate: '1998',
      Price: '40$',
      Description: 'Funny movie',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
    },
    {
      Title: 'Test2',
      ReleaseDate: '1999',
      Price: '50$',
      Description: 'Not funny',
      Poster:
        'https://media.discordapp.net/attachments/1025272411723145277/1040310343743836241/SWnewhope.png?width=200&height=300',
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
  return (
    <div className="container-fluid mbs-show">
      <h1> Current movies</h1> <br />
      <div className="row">
        <CurrentMovies currentMovies={currentMovies} /> <br />
      </div>
      <h1> Upcoming Moives</h1> <br />
      <div className="row">
        <UpcomingMovies upcomingMovies={upcomingMovies} /> <br />
      </div>
    </div>
  );
};

export default Catalog;
