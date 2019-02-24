import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { addTask } from '../../actions/taskAction';
const AddTodo = ({ dispatch }) => {
  let txtTile;
  let txtDesc;
  let task = {};

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!txtTile.value.trim()) {
          return;
        }

        task.title = txtTile.value;
        task.description = txtDesc.value;
        dispatch(addTask(task));
        txtTile.value = '';
        txtDesc.value = '';
      }}>

        <div className="form-group row">
          <div className="col-xs-2">
            <label for="title">Title</label>
            <input ref={node => txtTile = node} className="form-control" id="title" />
          </div>
          <div className="col-xs-3">
            <label for="desc">Description</label>
            <input ref={node => txtDesc = node} className="form-control" id="desc" />
          </div>
          <div className="col-xs-3">
            <label for="action"></label>
            <button type="submit" id="action" className="form-control">
              Add Todo
        </button>
          </div>
        </div>




      </form>
    </div>
  );
};

export default connect()(AddTodo);
