import * as React from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  setTodoList:  React.Dispatch<React.SetStateAction<Todo[]>>;
};


export const TodoItem: React.FC<TodoItemProps> = ({ id, task, deadline, person, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }
  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className="">{person}</div>
      <div className="">{deadline}</div>
      <div>
        <Button onClick={deleteTodo} color="red">削除</Button>
      </div>
    </li>
  );
};