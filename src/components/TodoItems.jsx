import React from "react";

const TodoItems = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <ul>
              <li>Sample Task</li>
            </ul>
          </div>

          <div className="col">
            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <input type="button" value="Delete" className="btn btn-danger" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <ul>
              <li>Sample Task</li>
            </ul>
          </div>

          <div className="col">
            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <input type="button" value="Delete" className="btn btn-danger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
