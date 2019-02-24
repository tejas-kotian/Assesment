import React from 'react';
import Footer from '../components/common/Footer';
import AddTodo from './containers/AddToDo';
import VisibleTodoList from './containers/VisibleToDoList';

const App = () => (
  <div className="container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;