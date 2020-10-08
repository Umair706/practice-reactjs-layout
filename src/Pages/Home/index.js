import React from 'react'
//You can create an individual/seperate .css file for an component and import it on the top
import "./style.css";

/**
* @author
* @function Home
**/

//This is a functional component that takes props and show name passed as a prop

const Home = (props) => {

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//You can find about the Object destruction from the above link
//This statement below shows you an example of how you can get a key value from an object
const {name,age} = props; 
  return(
      
    <div className="HomeContainer">
      {/* You can show the data using {} in the JSX */}
        {name}
        
    </div>
   )

 }

 //Every component can have only one default export
export default Home