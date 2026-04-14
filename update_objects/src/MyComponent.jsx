import React , {useState} from "react";

function MyComponent(){
    const [car, setCar] = useState({brand: "BMW", model: "m5", year:2020 });
    function handleYearChange(e){
        setCar(c =>({...c, year: e.target.value}));
    }
     function handleBrandChange(e){
        setCar(c =>({...c, brand: e.target.value}));
    }
     function handleModelChange(e){
        setCar(c =>({...c, model: e.target.value}));
    }
    return(<div><p>Your favorite car is a {car.year} {car.brand} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.brand} onChange={handleBrandChange}/> 
        <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>);
}
export default MyComponent;