import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text,onDelete,title }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
   <p>
      <div onClick={onClick}>{title}</div>
      <div>{text}</div>
      <div className="btn-toolbar">
      <button type="button" onClick={onDelete} className="btn btn-primary btn-xs">Edit</button>
      <button type="button" onClick={onDelete} className="btn btn-primary btn-xs">Delete</button>
      <button type="button" onClick={onClick} className="btn btn-primary btn-xs">Complete</button>
  </div>

   </p>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Todo;