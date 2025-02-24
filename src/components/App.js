import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

    const[addedtasks, setaddedtasks]=useState(TASKS)
    function addtasks(formdata){
      setaddedtasks((currenttasks)=> [...currenttasks, formdata])
    }
    const [categoryselected, setselected]=useState("All")
    function buttonclicked(category){

      setselected(category)

    }
    

    
    const catfilteredtasks =
    categoryselected === "All"
      ? addedtasks
      : addedtasks.filter((task) => task.category === categoryselected);


      
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} buttonclicked={buttonclicked} categoryselected={categoryselected}/>
      <NewTaskForm categories={CATEGORIES} addtasks={addtasks}/>
      <TaskList tasks={catfilteredtasks} />
    </div>
  );
}

export default App;