import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'

function App() {
  

  return (
    
    <div id="layout-wrapper">
      <div className="main-content">

        <BrowserRouter>
        <HeaderComponent/>
      
          <Routes>
           <Route path="/" element={<ListTodoComponent />}></Route>
           <Route path="/todos" element={<ListTodoComponent />}></Route>
           <Route path="/add-todo" element={<TodoComponent />}></Route>
           <Route path="/edit-todo/:id" element={<TodoComponent />}></Route>
          </Routes>
         
        </BrowserRouter>


       
        

      </div>
    </div>
      
    
  )
}

export default App
