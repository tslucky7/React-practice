import * as React from "react";
import { Button } from "../parts/Button";
import { useTimer } from "./use-timer";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};


export const TodoItem = ({ id, task, deadline, person, deleteTodo }: Props) => {
  const { time } = useTimer();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <li className="grid grid-cols-4	">
      <div className="">{task}</div>
      <div className="">{person}</div>
      <div className="">{deadline}</div>
      <div>
        <Button onClick={() => deleteTodo(id)} color="red">削除</Button>
        <div className="">タイマー：{time}秒</div>
        <div>{isLoggedIn ? "ログイン中" : "ログアウト中"}</div>
      </div>
    </li>
  );
};