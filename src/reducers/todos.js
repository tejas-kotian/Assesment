const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        );
       case 'LOAD_TASKS_SUCCESS':
         state.todos = action.tasksNew.tasks;
         return state.todos; 
       
       case  'CREATE_TASK_SUCCESS':
       return [
        ...state,
        {
          id: action.task.id,
          description:action.task.description,
          text: action.task.description,
          title: action.task.title,
          completed: false
        }        
      ];

      case 'DELETE_TASK_SUCCESS':
      return state.filter( val => val.id !== action.id );
      
       default:
        return state;
    }
  };
  
  export default todos;
  