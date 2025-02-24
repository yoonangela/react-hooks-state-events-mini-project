import React, { useState, useEffect } from "react";
import Task from "./Task"

function TaskList({tasks}) {


  const[tasklist, settasklist]=useState(tasks)
  

  useEffect(() => {
    settasklist(tasks);
  }, [tasks]); 

  function maketasklist(task){ 
   return settasklist((tasklist) => tasklist.filter((t) => t.text !== task.text))
   
  }
 

  return (
    <div className="tasks">
      {tasklist.map((task)=>(<Task maketasklist={maketasklist} key={task.text} task={task}/>))}
    </div>
  );
}

export default TaskList;
