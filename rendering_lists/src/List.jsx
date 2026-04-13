import PropTypes from 'prop-types';
function List(props){
    /*
  const fruits = ["Apple", "Banana", "pineappale", "Grapes", "Orange","Guava"];
*/

/*
  const fruits = [
    { id:1, name:"Apple", calories: 95},
    { id:2, name:"Banana", calories: 105},
    {id:3, name:"Pineapple", calories: 82},
    {id:4,name:"Grapes", calories: 52},
    {id:5, name:"Orange", calories: 62},
    {id:6,name:"Guava", calories: 129}
  ];
*/

 // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER

 // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER

// fruits.sort((a,b)=> a.calories - b.calories); // LOW TO HIGH CALORIES)  NUMERIC

// fruits.sort((a,b)=> b.calories - a.calories); // HIGH TO LOW CALORIES) REVERSE  NUMERIC
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); // FILTER LOW CALORIE FRUITS

// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100); // FILTER HIGH CALORIE FRUITS


  // const listItems = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b> </li>);
  

  // const listItems = highCalFruits.map((highCalFruit) => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b> </li>);
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b> </li>);

  return(
    <>
    <h3 className="category">
        {category}
    </h3>
    <ol className="list">
     {listItems}
    </ol>
    </>
  );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number
    }))
}
List.defaultProps = {
  category: "Category",
  items:[]
}

export default List;