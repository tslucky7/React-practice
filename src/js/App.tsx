import * as React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";

export const App = () => {
  const [newTask, setNewTask] = React.useState<string>("掃除");

  console.log(newTask);

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border-2 border-emerald-500 rounded-md p-2 mt-4"
      />
      <p>{newTask}</p>
      <TodoList />
    </main>
  );
};
