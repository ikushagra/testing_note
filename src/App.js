import React, { useState } from "react";
import "./styles.css";
import List from "./List";

export default function App() {
  const [note, setNote] = useState("");
  const [newItem, setNewItem] = useState([{ newItem: mynote, date: date }]);

  const mynote = note;
  const date = Date.now();

  const handleChange = (e) => {
    setNote((prev) => (prev = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={note} onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
      <List />
    </div>
  );
}
