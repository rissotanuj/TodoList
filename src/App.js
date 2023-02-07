import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import { HashRouter, Routes, Route, BrowserRouter, } from 'react-router-dom';



function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const OnDelete = (todo) => {
    setTodo(todos.filter((e) => {
        return  e !== todo;
    }))
  }

  const addTodo = (Title, Desc)=>{
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos.length;
      // sno = todos[todos.length - 1].sno + 1;
      console.log("This is todos.length ",todos.length);
    }
      let myTodo = {
          sno : sno,
          Title : Title,
          Desc : Desc
      }

      setTodo([...todos, myTodo]);
      console.log("This is todos",todos);

  }    

  const[todos, setTodo] = useState(initTodo);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (<>
    <HashRouter basename='/'>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = { <Home  todos = {todos}  OnDelete = {OnDelete} addTodo = {addTodo}/>}></Route>
    <Route exact path = "/about" element = {<About/>}></Route>
     </Routes>
     </HashRouter>
  </>)
}

export default App;
