function Food() {
    const food1 = "Apple";
    const food2 = "Banana";
    const food3 = "Orange";
  return(
    <ul>
        <li>Grapes</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
    </ul>
  )
}
export default Food;