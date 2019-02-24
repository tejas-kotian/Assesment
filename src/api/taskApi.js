
class TaskApi {
  static getAllTask() {
    debugger;
    return fetch("http://localhost:3000/tasks");
    
  }

  static saveTask(author) {
    return fetch('http://localhost:3000/registration', {
        method: 'POST',
        body: author
    });
  }

  static deleteTask(taskID) {
    return fetch('http://localhost:3000/delete-item/', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: taskID})
    });   
}
}

export default TaskApi;
