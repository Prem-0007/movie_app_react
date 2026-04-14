// useContext() = React hook that allows you to share values between multiple levels of components without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. const ContextName = createContext(defaultValue);
// 3. <ContextName.Provider value ={sharedValue}>


// CONSUMER COMPONENTS 
// 4. import {useContext} from 'react';
// 5. const context = useContext(ContextName);}
import ComponentA from './ComponentA.jsx';


import React from 'react';

function App(){
  return(<>
  <ComponentA />

  </>);
}
export default App;