import React from "react";

function Task({maketasklist, task}) {

  return (
  
      <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button onClick={()=>maketasklist(task)} className="delete">X</button>
      </div>
    )
  
}

export default Task;
