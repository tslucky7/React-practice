import * as React from "react";
import { Button } from "../parts/Button";
import { useTimer } from "../../hooks/use-timer";
import { useAuth } from "../../hooks/use-auth";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

export const TodoItem = ({ id, task, deadline, person, deleteTodo }: Props) => {
  const { time } = useTimer();
  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className={style}>{person}</div>
      <div className="">{deadline}</div>
      <div>
        <Button onClick={() => deleteTodo(id)} color="red">
          削除
        </Button>
        <div className="">タイマー：{time}秒</div>
      </div>
    </li>
  );
};
