import React, {useState} from 'react'

const CreateTodo = () => {
  // const countTasks = () =>{ 
    //   if (tasks === 0){
    //     return "No tasks available"
    //   } else {
    //     return `Tasks: ${tasks}`
    //   }
  //   return tasks === 0 ? "No tasks available" : `Tasks: ${tasks}`;
  //  }
  
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ['1','2','3'];

  const handleClick = () => {
      setCount(count + 1);
  };
  const handleChange = (event) => {
      setInput(event.target.value);
  };


  return (
  <>
    <h1>Tasks : {count}</h1>
    <input type="text" onChange={handleChange}></input>
    <button 
      onClick={handleClick}
      value="add task button">
      Add Task
    </button>
    <h1>input : {input}</h1>
    <ul>
      {
        tasks.map(task => <li key={task}>{task}</li>)
      }
    </ul>
  </>
  );
};

export default CreateTodo