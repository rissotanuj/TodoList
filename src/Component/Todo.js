import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {

  let myStyle = {
    minHeight: "70vh",
    margin: "60px auto",
    width: "70vw",
    backgroundColor :"grey"
 }

 
  return (
    <div>
      <div className="container my-3" style={myStyle}>
        <h2 className ='my-3' style={{textAlign : "center"}}>TodoList</h2>
        {props.todos.length === 0?"No todos to display ":props.todos.map((todo)=>{
        console.log(todo);
         return (<> <TodoItem  todo = {todo} key = {todo.sno} OnDelete = {props.OnDelete}/> </>)
        })}
      </div>
    </div>
  )
}

