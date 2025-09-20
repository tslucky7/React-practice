import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useEffect } from "react";

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [count, setCount] = React.useState<number>(0);
  useEffect(() => {
    console.log("コンポーネントがマウントされた時とtodoListが更新された時に実行される");
    // クリーンアップ関数の例
    // return () => {
    //   console.log("コンポーネントがアンマウントされる時に実行される");
    // };
  }, [todoList]);

  return (
    <main className="my-0 mx-auto w-3/4 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-6">
        <Heading level="h2">カウント</Heading>
        <div className="mt-8">
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>カウントアップ</button>
        </div>
      </div>
      <div className="mt-6">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm setTodoList={setTodoList}/>
        </div>
      </div>
      <div className="mt-10">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList} />
        </div>
      </div>
    </main>
  );
};
