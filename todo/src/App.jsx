import React, { useState } from "react";
import Todo from "./components/Todo";
import Search from "./components/Search"; // Corrigido o nome do componente aqui
import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState(""); // Adicionado o estado para a pesquisa

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000), text, category, isCompleted: false },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} /> {/* Corrigido a passagem de props */}
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
