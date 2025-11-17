import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { useTodoList } from "./components/todo/use-todo-list";

export const App = () => {
  const { todoList, setTodoList, addTodo } = useTodoList();

  return (
    <main className="my-0 mx-auto w-3/4 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-6">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
      <div className="mt-10">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </main>
  );
};
