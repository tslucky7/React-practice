import * as React from "react"
import { Heading } from "../parts/Heading"
import { TextField } from "../parts/TextField"
import { Todo } from "../../App";

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
    <>
      <Heading level="h1">TODO</Heading>
      <TextField
        label="タスク名"
        value={newTask}
        onChange={setNewTask}
        type="text"
      />
      <TextField
        label="締切"
        value={newDeadline}
        onChange={setNewDeadline}
        type="date"
      />
      <TextField
        label="担当者"
        value={newPerson}
        onChange={setNewPerson}
        type="text"
      />
      <button className="border bg-cyan-400" onClick={addNewTodo}>
        追加
      </button>
      <TodoList todoList={todoList} />
    </>
  )
}