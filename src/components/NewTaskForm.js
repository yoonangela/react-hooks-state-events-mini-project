import React,{useState} from "react";



function NewTaskForm({categories,addtasks}) {

  const initialform ={
    text : '',
    category: ''
  }
  
  
  const [formdata, setformdata]= useState(initialform)

  function handleonChange(event){
    const { name, value}= event.target
    setformdata((currentformdata)=> ({...currentformdata, [name]: value}))
  }

  console.log(formdata)

  function onTaskFormSubmit(event){
    event.preventDefault()
    addtasks(formdata)

  }

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleonChange} value={formdata.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleonChange}  value={formdata.category} name="category">
          {categories.map((category)=> category==="All" ?"":<option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
