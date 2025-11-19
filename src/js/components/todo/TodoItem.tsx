import * as React from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};


export const TodoItem: React.FC<TodoItemProps> = ({ id, task, deadline, person, deleteTodo }) => {

  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className="">{person}</div>
      <div className="">{deadline}</div>
      <div>
        <Button onClick={() => deleteTodo(id)} color="red">削除</Button>
      </div>
    </li>
  );
};