import "./styles.css";
import { useState } from "react";
import ToDoList from "./ToDoList";
export default function App() {
  const [itemValue, setItemValue] = useState(" ");
  const [itemList, setItemList] = useState([]);

  const inputHandler = (e) => {
    e.preventDefault();
    setItemValue(e.target.value);
  };
  const addToDo = () => {
    setItemList([...itemList, itemValue]);

    setItemValue("");
  };

  const deleteItem = (id) => {
    setItemList(
      itemList.filter((arr, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <input
        style={{ margin: "0.5em", padding: "0.1em" }}
        type="text"
        onChange={inputHandler}
        value={itemValue}
      />
      <button onClick={addToDo}>Add #{itemList.length + 1}</button>

      <div>
        {itemList.map((item, index) => (
          <ToDoList key={index} id={index} text={item} onSelect={deleteItem} />
        ))}
      </div>
    </div>
  );
}
