import * as React from "react";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> = ({ task, deadline, person }) => {
  return (
    <li className="grid grid-cols-3	">
      <div className="">{task}</div>
      <div className="">{deadline}</div>
      <div className="">{person}</div>
    </li>
  );
};