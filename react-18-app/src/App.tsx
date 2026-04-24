// import Message from "./Message";
import ListGroup from "./ListGroup";
function App() {
  let items = ["Tokyo", "New York", "Paris", "Delhi", "London"];
  return (
    <div className="App">
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
