### Tutorial

### Steps
1. First, Create the directory and start with create-react-app. Next, delete files we don't need, such as the svg & test file. Remove some code in App.js.
```
cd <directory-name>
npx create-react-app <project-name>
```

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

2. We will be building an app that display a list of movies. A dashboard containing the name and displays a list of movies. Go ahead and import useState function from react npm like this (along side with React). `data` below can be an initial state that is available on load, which is returned by an API or DB.

```
import React, {useState} from 'react';

const [movies, setMovies] = useState(data)

or

const [movies, setMovies] = useState(<array of data>)
```

With this in mind, lets go ahead and create a new component called `MovieList` which utilises this function.

```
import React, {useState} from 'react';

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
  ...
  ...
}
```

On the level (indentation) of setState constants, we define what is returned for render. `movies` is mapped so that each `movie` outputs `name`, `price` and `id`. The reason we need to wrap the entire operation is because return expects only one child component.

```
import React, {useState} from 'react';

const MovieList = () => {
  ...
  ...
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
```

Lastly, export this component so we can use this in our App component.
_MovieList.js_
```
export default MovieList;
```

_App.js_
```
import MovieList from `./MovieList`;
...
function App(){
  return (
    <div className='App'>
      <MovieList /s>
    </div>
  );
}
...
```
