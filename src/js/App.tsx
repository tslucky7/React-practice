import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";
import { TextField } from "./components/TextField";

export type Todo = {
  id: number;
  task: string;
  deadline: string;
  person: string;
}

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");
  const [newDeadline, setNewDeadline] = React.useState<string>("");
  const [newPerson, setNewPerson] = React.useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev) => [...prev, {id: Date.now(), task: newTask, deadline: newDeadline, person: newPerson}]);
  }

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <TextField label="タスク名" value={newTask} onChange={setNewTask} type="text" />
      <TextField label="締切" value={newDeadline} onChange={setNewDeadline} type="date" />
      <TextField label="担当者" value={newPerson} onChange={setNewPerson} type="text" />
      <button className="border bg-cyan-400" onClick={addNewTodo}>追加</button>
      <TodoList todoList={todoList} />
    </main>
  );
};
