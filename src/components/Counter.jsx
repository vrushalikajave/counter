import React, { Fragment } from 'react'

const Counter = () => {
// Hooks use useState() to declare count variable

const[count, setCount] = React.useState(0);

  // const incrementCount = ()=>{
  //   console.log("Pre",count);
  //   setCount(count+1);
  //   console.log("Post",count);
  // };

  // const decrementCount = ()=>{
  //   console.log("Pre",count);
  //   setCount(count-1);
  //   console.log("Post",count);
  // };

  return (
    <div>
      <h1>Counter App: {count}</h1>
      {/* <button onClick={ incrementCount }>Increment</button>
      <button onClick={ decrementCount }>Decrement</button> */}

     <button onClick={ () => setCount(count+1) }>Increment</button>
      <button onClick={  () => {if(count>0) {setCount(count-1)} }}>Decrement</button> 
      </div>
  )
}

export default Counter
