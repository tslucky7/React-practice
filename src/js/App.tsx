import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useEffect } from "react";

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  // マウント時に、LocalStorageからtodo一覧のデータを取得する
  useEffect(() => {
    const todoListData = localStorage.getItem("todo-list");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData))
    }
  }, [])

  // todoListが更新されるたびに、LocalStorageにデータを保存する
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]); // 依存配列

  return (
    <main className="my-0 mx-auto w-3/4 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-6">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm setTodoList={setTodoList}/>
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
