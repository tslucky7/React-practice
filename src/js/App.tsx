import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { TextField } from "./components/parts/TextField";

export type Todo = {
  id: number;
  task: string;
  deadline: string;
  person: string;
};

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  

  

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
     
    </main>
  );
};
