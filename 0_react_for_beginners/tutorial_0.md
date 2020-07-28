
### Tutorial
Doing a video tutorial by [React Tutorial For Beginners](https://youtu.be/dGcsHMXbSOA) by [Dev Ed](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) for revision. First part of a 4 parts series to eventually get to Redux.

### Steps
1. Go to https://nodejs.org/en/ and download the latest version which is recommended for most users.
2. After doing this, we can use NPM to install packages. The package that we need here is called *create-react-app*.
3. *Create-react-app* is a package that sets the skeleton/scaffold directory for us, with all its environment configured, so we can start writing react code.
4.  Head to the github and [start with these instructions](https://github.com/facebook/create-react-app#npx).

```
npx create-react-app react-for-beginners
```

5. change directory into react-for-beginners, `cd react-for-beginners`.

6. Remove everything in `src/app.js`, break and rebuild. Everything will make eventually make sense as we rebuild.

7. Let's recreate the component. A react component is a self contain piece of code which can contain html, styles and logic. [Timeline 9:40]

```
import React from 'react';

function App(){
  return(
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

8. Behind the scenes, jsx (html components inside the div) gets compiled / generated into javascript then injected into the div with id root, which gets rendered into the views.

9. [Timeline 14:43] Let's just create additional logic, a button that executes a function that says hello.

```
import React from 'react';

function App(){
  const sayHello = () => {
    console.log('Hello');
  }

  return (
    <div>
      <h1>Hello Reach</h1>
      <button onClick={sayHello}>Helo</button>
    </div>
    )
}

export default App;
```

10. Note that `{}` in jsx dynamically process javascript in the div component. Compare the difference below

```
const text = 'Hell0'
<button>{text}</button> => user sees button text as Hell0
```

versus
```
const text = 'Hello'
<button>Bye</button> => user sees button text as Bye
```

11. Also note that we assign `sayHello` to `onClick` function without the parenthesis because we do not want to invoke the method. Doing this will invoke the method `<button onClick={sayHello()}>Helo</button>` as soon as the component gets loaded.

12. We can create new components or split up the component by, [Timeline 17:37] Splitting the one component into two. This is how we modularize each components into seperate small files.

*src/App.js*
```
import React from 'react';
import Hello from './sayHello';

function App(){
  return(
    <div>
      <h3>This is the App Component</h3>

      <Hello />
    </div>
  )
}

export default App;
```

*src/sayHello.js*
```
import React from 'react';

function Hello(){
  const sayHello = () => {
    console.log('Hello');
  }

  return (
    <div>
      <h3>This is the Hello Component</h3>
      <button onClick={sayHello}>Say Hello</button>
    </div>
    )
}

export default Hello;
```

13. Let's create a component that replicates tweets like twitter. [Timeline 20:45] Create a new file called `src/Tweet.js` as below, and import into `src/App.js` to include in the component.

*src/Tweet.js*
```
import React from 'react';

function Tweet(){
  return(
    <div>
      <h3>Name</h3>
      <p>This is a random tweet</p>
      <h3>Number of likes</h3>
    </div>
  );
}

export default Tweet;
```

*src/App.js*
```
...
import Tweet from './Tweet';

function App(){
  return(
    <div>
      ...

      <Tweet />
    </div>
  )
}

...
```

14. Including styles, use className in the jsx (html tags). Reserved keyword. Below is how you include styles.

*src/App.css*
```
.app {
  min-height: 100vh;
  background: rgb(95, 167, 190);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tweet {
  height: 300px;
  width: 300px;
  background: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
```

These are first imported into `.js` files (not for App.js) and then used in components via `className`.

*src/App.js*
```
import Tweet from './Tweet';

function App(){
  return(
      <div className='app'>
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
  );
}

export default App;
```

*src/Tweet.js*
```
import React from 'react';

function Tweet(){
  return(
    <div className={tweet}>
      ...
    </div>
  );
}

export default Tweet;
```

15. [Timeline 26:58] Now how can we make each Tweet to have its own name and contents? We can define a prop on each individual component. First you past in a name prop to each of the tweets, as below. Then you update the Tweet component to accept a prop and display it.

*src/App.js*
```
import Tweet from './Tweet';

function App(){
  return(
      <div className='app'>
        <Tweet prop='Jane Doe'/>
        <Tweet prop='John Doe'/>
        <Tweet prop='Doe a deer'/>
      </div>
  );
}

export default App;
```

*src/Tweet.js*
```
import React from 'react';
import './App.css'

function Tweet(props){
  return(
    <div className={tweet}>
      <h3>{props.name}</h3>
      <p>This is a random tweet</p>
      <h3>Number of likes</h3>
    </div>
  );
}

export default Tweet;
```

16. We can extend this to include other custom props for each component.
*src/App.js*
```
import Tweet from './Tweet';

function App(){
  return(
      <div className='app'>
        <Tweet name='Jane Doe' message='I am she who is unknown'/>
        <Tweet name='John Doe' message='I am he who is unknown'/>
        <Tweet name='Doe a deer' message='I am from the forest'/>
      </div>
  );
}

export default App;
```
