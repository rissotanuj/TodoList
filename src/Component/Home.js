import React from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

export default function Home(props) {
  return (
    <>
    <AddTodo addTodo = {props.addTodo}/>
    <Todo todos = {props.todos} OnDelete = {props.OnDelete}/>
    </>
  )
}
