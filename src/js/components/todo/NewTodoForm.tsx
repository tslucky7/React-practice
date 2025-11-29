import * as React from "react"
import { TextField } from "../parts/TextField"
import { Button } from "../parts/Button";

type Props = {
  addTodo: (newTask: string, newDeadline: string, newPerson: string) => void;
}

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [newDeadline, setNewDeadline] = React.useState<string>("");
  const [newPerson, setNewPerson] = React.useState<string>("");

  const addNewTodo = () => {
    addTodo(newTask, newDeadline, newPerson)

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