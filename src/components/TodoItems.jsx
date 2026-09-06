import React from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
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
