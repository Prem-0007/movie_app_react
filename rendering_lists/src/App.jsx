import List from "./List.jsx";
function App() {
   const fruits = [
    { id:1, name:"Apple", calories: 95},
    { id:2, name:"Banana", calories: 105},
    {id:3, name:"Pineapple", calories: 82},
    {id:4,name:"Grapes", calories: 52},
    {id:5, name:"Orange", calories: 62},
    {id:6,name:"Guava", calories: 129}
   ];
   const vegetables = [
    { id:1, name:"Carrot", calories: 41},
    { id:2, name:"Broccoli", calories: 34},
    {id:3, name:"Spinach", calories: 23},
    {id:4,name:"Potato", calories: 110},
    {id:5, name:"Tomato", calories: 18},
    {id:6,name:"Celery", calories: 16}
   ];
  return (
    <>
    {fruits.length> 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  )
}
export default App;