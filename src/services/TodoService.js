import axios from "axios";


const API_BASE_URL = 'http://localhost:8080/api/todos';

export function getAllTodos(){
  return axios.get(API_BASE_URL);
} 


export function createTodo(todo){
    return axios.post(API_BASE_URL,todo);
}

export function getTodoById(id){
 return axios.get(API_BASE_URL + '/' + id);
}

export function updateTodo(id,todo){
    return axios.put(API_BASE_URL + '/' + id,todo);
}

export function deleteTodo(id){
    return axios.delete(API_BASE_URL + '/' + id);
}

export function complete(id){
    return axios.patch(API_BASE_URL + '/' + id + '/complete');
}

export function incomplete(id){
    return axios.patch(API_BASE_URL + '/' + id + '/incomplete');
}