// REACT HOOK =  special function that allows functional components to have access to React features like state and lifecycle methods (useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, etc...)

// useState =  allows us to add state to functional components. It returns an array with two values: the current state and a function to update that state.
// [name , setName]

import Counter from "./Counter.jsx";

import MyComponent from "./MyComponent.jsx";
function App() {
  return(
    <>
  {/*<MyComponent />*/} 
  <Counter /> 
    </>
  )
}
export default App;