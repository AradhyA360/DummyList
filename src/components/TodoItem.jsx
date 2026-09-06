import React from "react";

const TodoItem = ({ item, onDeleteClick }) => {
  return (
    <div>
      <div key={item.index} className="row align-items-center">
        <div className="col">
          <ul>
            <li>{item.name}</li>
          </ul>
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={item.dueDate}
            readOnly
          />
        </div>
        <div className="col">
          <input
            type="button"
            value="Delete"
            className="btn btn-danger"
            onClick={() => onDeleteClick(item.name)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
