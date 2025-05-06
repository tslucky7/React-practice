import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 123, task: "掃除", deadline: "明日まで", person: "田中" },
    { id: 456, task: "洗濯", deadline: "今日中", person: "佐藤" },
    { id: 789, task: "買い物", deadline: "今週中", person: "鈴木" },
  ];

  return (
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 font-bold">
        <div>タスク名</div>
        <div>締切</div>
        <div>担当者</div>
      </li>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo.task}
          deadline={todo.deadline}
          person={todo.person}
        />
      ))}
    </ul>
  );
};
