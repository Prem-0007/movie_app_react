// updater functions = A function passed as an argument to setState() usually 
// ex. setYear(arrow func)
// Allow for safe updates based on the previous state.
// used with multiple states and when the new state depends on the previous state. It ensures that you are working with the most up-to-date state value, especially in asynchronous scenarios where multiple state updates may be queued.

import React, {useState} from "react";

function MyComponent() {
 const [count, setCount] = useState(0);

 function increment(){
    //  uses the CURRENT state to calculate the next value.
    // set functions do not trigger an update
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update
  setCount(c =>c +1)
  // UPDATE  
  setCount(c => c+1)
  // UPDATE
  setCount(c =>c+1)
  // UPDATE 

}
function decrement(){
  setCount(c => c - 1);
}
function reset(){
    setCount(0);
}

  

return(
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)
}
export default MyComponent;