import * as React from "react";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> = ({ task, deadline, person }) => {
  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className="">{person}</div>
      <div className="">{deadline}</div>
      <button className="border bg-cyan-400 w-16 rounded" onClick={() => {}}>
        削除
      </button>
    </li>
  );
};