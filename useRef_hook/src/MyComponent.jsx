// useState() = Re-renders the component when the state value changes.

// useRef() = Does not cause a re-render when the ref value changes. It provides a way to directly access DOM elements or persist values between renders without triggering a re-render.

// 1. Accessing DOM
// 2. Handling Focus , Animations and Transitions
// 3. Managing Timing and Intervals

import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {
    
 // const ref= useRef(0);

const inputRef1= useRef(null);
const inputRef2= useRef(null);
const inputRef3= useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
      //  console.log(inputRef);
    })
 //  let [number, setNumber]=useState(0);
  function handleClick1(){
    // ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();

inputRef1.current.style.backgroundColor="red";
inputRef2.current.style.backgroundColor="";
inputRef3.current.style.backgroundColor="";
  }
   function handleClick2(){
    
    inputRef2.current.focus();
inputRef1.current.style.backgroundColor="";
inputRef2.current.style.backgroundColor="red";
inputRef3.current.style.backgroundColor="";
  }
   function handleClick3(){
   
    inputRef3.current.focus();
inputRef1.current.style.backgroundColor="";
inputRef2.current.style.backgroundColor="";
inputRef3.current.style.backgroundColor="red";
  }
    return(
    <div>
        <button onClick={handleClick1}>
   click me !
    </button>
    <input  ref={inputRef1}/> 
        <button onClick={handleClick2}>
   click me 2!
    </button>
    <input  ref={inputRef2}/> 
        <button onClick={handleClick3}>
   click me 3!
    </button>
    <input  ref={inputRef3}/> 
        </div> )
}
export default MyComponent;