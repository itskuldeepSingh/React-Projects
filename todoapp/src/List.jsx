import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './context/TodoContext';

const List = () => {
    const { todos, deleteTodo, updateTodo } = useContext(TodoContext);
    const [list, setList] = useState([]);

    const handleEditEvent = (id) => {
        setList(list.map(todo => ({
            ...todo,
            editable: todo.id === id ? false : todo.editable
        })));
    };

    const handleInputChange = (id, newValue) => {
        setList(list.map(todo => ({
            ...todo,
            todo: todo.id === id ? newValue : todo.todo
        })));
    };


    const handleSaveEvent = (id, todo) => {
        const updatedTodo = {
            ...todo,
            editable: true
        };
    
        setList(list.map(items => (items.id === id ? updatedTodo : items)));
        updateTodo(id, updatedTodo);
    };

    useEffect(() => {
        setList(todos);
        console.log(todos)
    }, [todos]);

    return (
        <div className='flex justify-center flex-col items-center mt-4'>
            {list.map(todo => (
                <div key={todo.id} className="relative w-3/4 md:w-3/4 lg:w-1/2 mt-2">
                    <input
                        id={todo.id}
                        type="text"
                        value={todo.todo}
                        className="border border-indigo-500/100 outline-none rounded-sm w-full px-4 py-2.5"
                        readOnly={todo.editable}
                        required
                        onChange={(e) => handleInputChange(todo.id, e.target.value)}
                    />
                    <div className="h-full absolute top-0 right-5 flex gap-5 justify-center items-center">
                        {todo.editable && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-4' 
                            onClick={() => handleEditEvent(todo.id)}>
                                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                            </svg>
                        )}
                        {!todo.editable && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-4' 
                            onClick={() => handleSaveEvent(todo.id, todo)}>
                                <path d="M96 256c0-106 86-192 192-192s192 86 192 192-86 192-192 192-192-86-192-192zm331.3 30.7c9.4-9.4 9.4-24.6 0-34l-57.3-57.3c-9.4-9.4-24.6-9.4-34 0l-22.6 22.6 91.4 91.4 22.5-22.7zM336 288H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h304c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32z" />
                            </svg>
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-4' onClick={() => deleteTodo(todo.id)}>
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
