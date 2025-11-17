import * as React from "react";
import { Todo } from "./type";
import { useEffect } from "react";

export const useTodoList = () => {
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

  const addTodo = (newTask: string, newDeadline: string, newPerson: string) => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        deadline: newDeadline,
        person: newPerson,
      },
    ]);
  }

  return { todoList, setTodoList, addTodo }
};