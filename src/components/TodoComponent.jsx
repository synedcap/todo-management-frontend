import React, { useEffect, useState } from 'react';
import { createTodo, getTodoById, updateTodo } from '../services/TodoService';
import { useNavigate, useParams } from 'react-router-dom';


const TodoComponent = () => {

    const [datas,setDatas] = useState();

    const navigator = useNavigate();
    const {id} = useParams();
    console.log(id);

    useEffect(() =>{
        getTodoById(id).then((response) => {
            setDatas(response.data)
        })
    },[]);

    
    const saveOrUpdateTodo = (e)  => {

        e.preventDefault();

       if (id) {

        updateTodo(id,datas).then((response) => {
            navigator("/todos")
        }).catch(error => {
            console.error(error);
        })
        
       }else{

           createTodo(datas).then((response) => {
              
               navigator("/todos")
           }).catch(error => {
               console.error(error)
           })
       }
    }

    function pageTitle(){

        if (id) {
            return "Update todo";
            
        } else {
            return "Add todo";
        }
    }

    return (
        <div className='container'>

            <br />

            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <h2 className="text-center">
                    { pageTitle()}
                    </h2>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text"
                                name='title'
                               value={datas?.title}
                                placeholder='Title'
                                 className="form-control"
                                 onChange={(e) => {
                                    setDatas({...datas,title:e.target.value})

                                   
                                 }}
                                  />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Todo Description</label>
                                <input type="text"
                                name='description'
                        
                                placeholder='description'
                                 className="form-control"
                                 value={datas?.description}
                                 onChange={(e) => {
                                    setDatas({...datas, description:e.target.value})
                                 }}
                                  />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Todo completed</label>
                               <select  className="form-control" name="completed" id=""
                               onChange={(e) => {
                                setDatas({...datas,completed:e.target.value})
                               }} value={datas?.completed}>
                                  <option value="">choose</option>
                                  <option value="false" >No</option>
                                  <option value="true">Yes</option>
                               </select>
                            </div>

                            <button className='btn btn-success' onClick={ (e)=> saveOrUpdateTodo(e)}> Submit</button>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default TodoComponent;