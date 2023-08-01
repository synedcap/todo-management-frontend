import React, { useEffect, useState } from 'react';
import { complete, deleteTodo, getAllTodos, incomplete } from '../services/TodoService';
import { Link } from 'react-router-dom';
import TodoComponent from './TodoComponent';

const ListTodoComponent = () => {

    const [todos,setTodos] = useState();

    useEffect(() => {
        listTodos();
    },[])

    const listTodos = () => {

        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const removeTodo = (id) => {
     deleteTodo(id).then((response) => {
        listTodos();
     }).catch(error => {
        console.error(error);
    })
    }


    function markCompeteTodo(id) {
        complete(id).then((response) => {
            listTodos();
         }).catch(error => {
            console.error(error);
        })
    }

    function markInCompeteTodo(id) {
        incomplete(id).then((response) => {
            listTodos();
         }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center mt-4 mb-4'>List of Todos</h2>

            <Link className='btn btn-primary mt-4' to={"/add-todo"}> Add Todo</Link>

            <div className='mt-4'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th> Description</th>
                            <th> Completed</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { todos?.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Yes': 'No'}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/edit-todo/${todo.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={() => removeTodo(todo.id)} style={{marginLeft:"10px"}}>Delete</button>
                                <button className='btn btn-success' onClick={() => markCompeteTodo(todo.id)} style={{marginLeft:"10px"}}>complete</button>
                                <button className='btn btn-secondary' onClick={() => markInCompeteTodo(todo.id)} style={{marginLeft:"10px"}}>Incomplete</button>
                            </td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ListTodoComponent;