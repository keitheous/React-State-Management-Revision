import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 123
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 124
    },
    {
      name: 'Inception',
      price: '$10',
      id: 122
    }
  ]);

  return(
    <div>
      {
        movies.map(movie => (
          <li>{movie.name}</li>
          <li>{movie.price}</li>
          <li>{movie.id}</li>
        ))
      }
    </div>
  );
}

export default MovieList;
