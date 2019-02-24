import TaskApi from '../api/taskApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadTasksSuccess(tasksNew) {
  return {type: types.LOAD_TASKS_SUCCESS, tasksNew};
}

export function createTaskSuccess(task){
  return {type: types.CREATE_TASK_SUCCESS,task};
}

export  function deleteTaskSuccess(id){
  return {type:types.DELETE_TASK_SUCCESS,id}
}

export function deleteTask(id){

  return function (dispatch) {
   debugger;
   
   return fetch('http://localhost:3000/task/delete/'+id, {
        method: 'DELETE'  
    })
    .then(res => res.json())
      .then(json => {
        // task.id = json.message;
        dispatch(deleteTaskSuccess(id));
        //return json.products;
      })
    .catch(error => {
          console.log(error);
          throw(error);
  
        });
  };



}
export function addTask(task){
  return function (dispatch) {
    //console.log(dispatch);
   // dispatch(beginAjaxCall());
   debugger;
   return fetch('http://localhost:3000/task/create/' + task.title +"/" + task.description, {
        method: 'POST'
    })
    .then(res => res.json())
      .then(json => {
         task.id = json.message;
         task.text = task.description;
        dispatch(createTaskSuccess(task));
        //return json.products;
      })
    .catch(error => {
          console.log(error);
          throw(error);
  
        });
  };

}

export function loadTasks() {
    return function (dispatch) {
      //console.log(dispatch);
     // dispatch(beginAjaxCall());
      return fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(json => {
        dispatch(loadTasksSuccess(json));
        //return json.products;
      })
      .catch(error => {
            console.log(error);
            throw(error);
    
          });
    };
  }
  