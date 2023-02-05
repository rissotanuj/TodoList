import React from "react";
import { useState } from "react";

export default function AddTodo({addTodo}) {
    
        const [Title, setTitle] = useState("");
        const [Desc, setDesc] = useState("");
    
        const submit = (e)=>{
            e.preventDefault();
            if(!Title||!Desc){
                alert("Title or Description can't be blank please fill it.")
            }
            else{
                addTodo(Title, Desc);
                setTitle("");
                setDesc("");
            }
    }

    let myStyle = {
      width: "70vw"
    }

  return (
    <>
      <div className = "container my-3"style={myStyle}>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              value={Title}
              onChange = {(e)=>setTitle(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="Description"  value={Desc} onChange = {(e)=>setDesc(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary btn-danger">
            AddTodo
          </button>
        </form>
      </div>
    </>
  );
}
