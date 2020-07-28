import React from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet'

function App(){
  // return(
  //   <div>
  //     <h3>This is the App Component</h3>
  //
  //     <Hello />
  //   </div>
  // )
  // return(
  //   <div>
  //     <h3>This is the App Component</h3>
  //
  //     <Tweet />
  //     <Tweet />
  //     <Tweet />
  //   </div>
  // )

  return(
      <div className='app'>
        <Tweet name='Jane Doe' message='I am she who is unknown' likes='1'/>
        <Tweet name='John Doe' message='I am he who is unknown' likes='1'/>
        <Tweet name='Doe a deer' message='I am from the forest' likes='90k'/>
      </div>
  );
}

export default App;
