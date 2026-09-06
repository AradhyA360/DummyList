import React, { useRef } from "react";

const AddTodoItem = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = (todoNameElement.current.value = "");
    const todoDate = (todoDateElement.current.value = "");
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div>
      <div className="container text-center">
        <form className="row" onSubmit={handleAddButtonClicked}>
          <div className="col">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter your task here"
            />
          </div>
          <div className="col">
            <input type="date" ref={todoDateElement} />
          </div>
          <div className="col">
            <input type="button" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoItem;
