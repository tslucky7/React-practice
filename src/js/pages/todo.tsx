import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { Button } from "../components/parts/Button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useTodoList } from "../hooks/use-todo-list";
import { useTimer } from "../hooks/use-timer";
import { useAuth } from "../hooks/use-auth";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { time } = useTimer();
  const { isLoggedIn, logout, userName } = useAuth();

  return (
    <main className="my-0 mx-auto w-3/4 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="">タイマー：{time}秒</div>
      <div>{isLoggedIn ? `ようこそ、${userName}さん` : "ログアウト中"}</div>
      <div>
        <Button onClick={logout} color="red">
          ログアウト
        </Button>
      </div>
      <div className="mt-6">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-10">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  );
};
