import React from 'react'


export default function TodoItem({todo, OnDelete}) {
  return (
    <>
    <div>
      <h6> Sno. {todo.sno+1}</h6>
      <h4>{todo.Title}</h4> 
      <p>{todo.Desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{OnDelete(todo)}}>Delete</button>
      <hr />
    </div>
    </>
  )
}
