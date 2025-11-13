import * as React from "react";
import { Todo } from "./type";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  setTodoList:  React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoItem: React.FC<TodoItemProps> = ({ id, task, deadline, person, setTodoList }) => {
  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className="">{person}</div>
      <div className="">{deadline}</div>
      <div>
        <button className="border bg-red-400 w-16 rounded" onClick={() => {
          setTodoList((prev) => prev.filter((todo) => todo.id !== id))
        }}>
          削除
        </button>
      </div>
    </li>
  );
};