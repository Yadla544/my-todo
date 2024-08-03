import { useState, useEffect } from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList';

export default function Home({ todos, completedTodos }) {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState(todos || []);
  const [completedTodosList, setCompletedTodos] = useState(completedTodos || []);

  useEffect(() => {
    setTodos(todos);
    setCompletedTodos(completedTodos);
  }, [todos, completedTodos]);

  return (
    <div className="App">
      <Head>
        <title>My Todos</title>
        <meta name="description" content="A simple ToDo application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My Todos</h1>
      <TodoList
        isCompleteScreen={isCompleteScreen}
        setIsCompleteScreen={setIsCompleteScreen}
        allTodos={allTodos}
        setTodos={setTodos}
        completedTodos={completedTodosList}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
}


export async function getServerSideProps() {
  // Replace these with your actual API endpoints
  const todosResponse = await fetch('https://api.example.com/todos');
  const todos = await todosResponse.json();

  const completedTodosResponse = await fetch('https://api.example.com/completedTodos');
  const completedTodos = await completedTodosResponse.json();

  return {
    props: { todos, completedTodos },
  };
}


{
  "todos": [
    { "title": "Sample Todo", "description": "This is a sample todo" }
  ],
  "completedTodos": [
    { "title": "Sample Completed Todo", "description": "This is a sample completed todo", "completedOn": "01-08-2024 at 12:00:00" }
  ]
}





'http://localhost:3000/server/users' 


