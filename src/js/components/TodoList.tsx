import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 123, task: "掃除", deadline: "明日まで" },
    { id: 456, task: "洗濯", deadline: "今日中" },
    { id: 789, task: "買い物", deadline: "今週中" },
  ];

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} task={todo.task} deadline={todo.deadline} />
      ))}
    </ul>
  );
};