import React from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        {/* <div className="col">
            <ul>
              <li></li>
            </ul>
          </div>

          <div className="col">
            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <input type="button" value="Delete" className="btn btn-danger" />
          </div>
        </div> */}

        {todoItems.map((item) => (
          <TodoItem
            key={item.index}
            item={item}
            onDeleteClick={() => onDeleteClick(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
