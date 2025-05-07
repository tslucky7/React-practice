import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";

export const App = () => {
  const [newTask, setNewTask] = React.useState<string>("掃除");
  const [newDeadline, setNewDeadline] = React.useState<string>("2023-10-01");
  const [newPerson, setPerson] = React.useState<string>("幸子"); 

  console.log(newTask);

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <label htmlFor="">タスク名</label>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2 border-emerald-500 rounded-md p-2 mt-4"
      />
      <label htmlFor="">締切</label>
      <input
        type="date"
        value={newDeadline}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2 border-emerald-500 rounded-md p-2 mt-4"
      />
      <label htmlFor="">担当者</label>
      <input
        type="text"
        value={newPerson}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2 border-emerald-500 rounded-md p-2 mt-4"
      />
      <p>{newTask}</p>
      <p>{newDeadline}</p>
      <p>{newPerson}</p>
      <TodoList />
    </main>
  );
};
