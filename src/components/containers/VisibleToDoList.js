import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters} from '../../actions';
import {deleteTask} from '../../actions/taskAction';

import TodoList from '../todo/ToDoList';
const getVisibleTodos = (todos, filter) => {
  debugger;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
