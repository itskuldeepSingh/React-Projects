import React, { useContext, useState } from 'react'
import { TodoContext } from './context/TodoContext';
import List from './List';

const App = () => {
  const { addTodo } = useContext(TodoContext)
  const [ todo , setTodo] = useState('')
  
  const handleSubmit = ((e) => {
    e.preventDefault();
    if(!todo.trim()) return;
    addTodo(todo)
    setTodo('')
  })

  return (
    <>
      <form className="flex justify-center" >
        <div className="relative w-3/4 md:w-3/4 lg:w-1/2 mt-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border bg-indigo-100 border-indigo-500/100 outline-none rounded-lg w-full px-4 py-2.5"
            placeholder="John"
            required
          />
          <button
           type="submit" 
           onClick={handleSubmit}
           className="absolute top-1 right-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add</button>
        </div>
      </form>
      <List/>
    </>
  );
};

export default App;