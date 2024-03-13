import React, { createContext, useState } from 'react';

export const TodoContext = createContext({
  todos: [], 
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  checkTodo: () => {},
})

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), 
        todo, 
        editable: true, 
        checked: false },
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo ))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, checkTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
