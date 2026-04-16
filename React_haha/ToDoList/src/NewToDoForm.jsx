import { useState } from "react";

export default function NewToDoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          placeholder="Enter a task..."
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}