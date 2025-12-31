import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";
import { Button } from "./components/parts/Button";
import { TextField } from "./components/parts/TextField";
import { useAuth } from "./contexts/use-auth";

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { time } = useTimer();
  const { isLoggedIn, login, logout, userName, setUserName } = useAuth();

  if (!isLoggedIn) {
    return (
      <main className="my-0 mx-auto w-3/4 text-center">
        <Heading level="h1">ログイン</Heading>
        <div className="flex gap-2">
          <TextField
            id="user-name"
            label="ユーザー名"
            type="text"
            value={userName}
            onChange={setUserName}
          />
          <Button
            onClick={login}
            color="blue"
          >
            ログイン
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="my-0 mx-auto w-3/4 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="">タイマー：{time}秒</div>
      <div>{isLoggedIn ? `ようこそ、${userName}さん` : "ログアウト中"}</div>
      <div>
        <Button
          onClick={logout}
          color="red"
        >
          ログアウト
        </Button>
      </div>
      <div className="mt-6">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo}/>
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
