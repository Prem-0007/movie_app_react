import React, {useState} from 'react';

function MyComponent(){
    const [cars, setCars] = useState([]);
    const [year,setYear]= useState(new Date().getFullYear());
    const [brand, setBrand]= useState("");
    const [model, setModel]= useState("");
    function handleAddCar(){
  const newCar = {year:year, brand:brand, model:model}
setCars(c=>[...c, newCar ])
setYear(new Date().getFullYear());
setBrand("");
setModel("");
    }
    function handleRemoveCar(index){
   setCars(c => c.filter((_, i) => i !== index))
    }
    function handleYearChange(event){
   setYear(event.target.value);
    }
    function handleBrandChange(event){
   setBrand(event.target.value);
    }
    function handleModelChange(event){
   setModel(event.target.value);
    }
    return (<div>
        <h2>List of Car Objects</h2>
        <ul>
   {cars.map((car, index) => 
<li key={index} onClick= {()=> handleRemoveCar(index)}>
{car.year} {car.brand} {car.model}
</li>)}
        </ul>
        <input type ="number" value={year} onChange={handleYearChange}/><br/>
         <input type ="text" value={brand} onChange={handleBrandChange} placeholder="Enter Car brand"/><br/>
         <input type ="text" value={model} onChange={handleModelChange} placeholder="Enter Car model"/><br/>
         <button onClick={handleAddCar}>Add Car</button>
    </div>)
}
export default MyComponent;