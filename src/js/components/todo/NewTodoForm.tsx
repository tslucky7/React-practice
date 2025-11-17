import * as React from "react"
import { TextField } from "../parts/TextField"
import { Todo } from "./type";
import { Button } from "../parts/Button";

type Props = {
  setTodoList:  React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const NewTodoForm = ({ setTodoList }: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [newDeadline, setNewDeadline] = React.useState<string>("");
  const [newPerson, setNewPerson] = React.useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        deadline: newDeadline,
        person: newPerson,
      },
    ]);

    setNewTask("");
    setNewDeadline("");
    setNewPerson("");
  };

  return (
    <div className="flex gap-x-5 items-center justify-center">
      <TextField
        id="new-task"
        label="タスク名"
        value={newTask}
        onChange={setNewTask}
        type="text"
      />
      <TextField
        id="new-deadline"
        label="締切"
        value={newDeadline}
        onChange={setNewDeadline}
        type="date"
      />
      <TextField
        id="new-person"
        label="担当者"
        value={newPerson}
        onChange={setNewPerson}
        type="text"
      />
      <Button onClick={addNewTodo} color="blue">追加</Button>
    </div>
  )
}