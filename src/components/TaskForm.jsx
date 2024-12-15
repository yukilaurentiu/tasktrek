import React from 'react'

const TaskForm = () => {
  return (
    <header className='app_header'>
      <form>
        <input type='text' clasName='text_input' placeholder='Enter your task'/>
        <div clasName='task_form_bottom_line'></div>
        <button clasNeme='tag'>HTML</button>
        <button clasNeme='tag'>CSS</button>
        <button clasNeme='tag'>JavaScript</button>
        <button clasNeme='tag'>React</button>
        
        <select clasName='task_status'>
          <option value='todo'>Todo</option>
          <option value='doing'>Doing</option>
          <option value='done'>Done</option>
        </select>
        <button type='submit' className='task_submit'>+ Add task</button>
      </form>
    </header>
    
  )
}

export default TaskForm