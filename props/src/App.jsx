// props = read-only properties that are shared between components 
// A parent component can send data to  a child component 
// <component key =value />


// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// age : propTypes.number

import Student from "./Student.jsx";

function App() {
  
  return (
    <>
     <Student name ="Prem" age={19} isStudent={true}/>
     <Student name ="Lorem" age={30}isStudent={false}/>
     <Student name ="Ipsum" age={52} isStudent={false}/>
      <Student name ="Lana" age={22} isStudent={true}/>
      <Student />
      <Student name="John" />
    </>
  )
}

export default App
