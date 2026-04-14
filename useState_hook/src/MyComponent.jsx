import React, {useState}
from 'react';

function MyComponent() {
 const [name, setName]= useState("Guest");
 const [age, setAge] = useState(0);
 const [isEmployeed, setIsEmployeed] = useState(false);

  const updateName = () => { 

    setName("prem haha");
  }
  const incrementAge = () => {
    setAge(age + 1);
  }
  const toggleEmployeeStatus = () => {
    setIsEmployeed(!isEmployeed);
  }

 return (
    <div>
        <p>Name: {name}</p>
       
        <button onClick={updateName}>Set Name</button>
         <p>Age: {age}</p>
           <button onClick={incrementAge}>Increment Age</button>

            <p>isEmployeed: {isEmployeed ? "Yes" : "No"}</p>
           <button onClick={toggleEmployeeStatus}>Toggle  Status</button>
    </div>
 )
}
export default MyComponent;
