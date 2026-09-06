import React, { useState } from "react";

const AddTodoItem = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    if (todoName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div>
      <div className="container text-center">
        <form className="row" onSubmit={handleAddButtonClicked}>
          <div className="col">
            <input
              type="text"
              value={todoName}
              onChange={handleNameChange}
              placeholder="Enter your task here"
            />
          </div>
          <div className="col">
            <input type="date" value={todoDate} onChange={handleDateChange} />
          </div>
          <div className="col">
            <input type="button" value="Add" onClick={handleAddButtonClicked} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoItem;
