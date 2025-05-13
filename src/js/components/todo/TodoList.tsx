import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../../App";

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => {
  return (
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 font-bold">
        <div>タスク名</div>
        <div>締切</div>
        <div>担当者</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          deadline={todo.deadline}
          person={todo.person}
        />
      ))}
    </ul>
  );
};
