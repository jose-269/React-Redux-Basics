import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
    const [todoId, settodoId] = useState(1);
    
    const nextTodo = () => {
        settodoId(todoId + 1);
    }
    const previousTodo = () => {
        if (todoId === 1) return;
        settodoId(todoId - 1);
    }
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  // console.log(todo);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading {isLoading ? "True" : "False"} </h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={ previousTodo }>previous Todo</button>
      <button onClick={ nextTodo }>Next Todo</button>

      {/* <ul>
              {
                  todos.map(todo => (
                      <li key={todo.id}>
                          <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
                          {todo.title}
                      </li>
                  ))
              }
          </ul> */}
    </>
  );
};
