import React from 'react'
import './pages.css'
  
const Home = () => {
  return (
    <div>
      <h1 className='smallText'>
        Hi, my name is 
      </h1>
      <h1 className='largeText'>
        Patrick
      </h1>
      <h1 className='smallText'>
        Peter Paul
      </h1>
      <h1 className='largeText'>
        Davis
      </h1>
      <h2 className='medText'>
        Software 
        Engineer
      </h2>
      <p>
        I am a strong C++ Programmer currently working in the Defense Industry, 
        implementing lower level device interaction and message routing.
        I have a passion for understanding how objects interact with eachother at a fundumental level. 
        {/* Whether that be through class design in code, or robots interacting and understanding their enviornment.  */}
      </p>

    </div>
    // <div className='homeContainer'>
    //   <div className='home'>
    //     <h1>{"HELLO WORLD"}</h1>
    //   </div>
    // </div>
  );
};
  
export default Home;