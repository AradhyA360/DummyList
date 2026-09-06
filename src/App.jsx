import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoitemName) => {
    setTodoItems((currValue) =>
      currValue.filter((item) => item.name !== todoitemName),
    );
  };

  return (
    <center className="todo-container">
      <Header />
      <AddTodoItem onNewItem={handleAddItem} />
      <hr />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
