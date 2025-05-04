import * as React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// const element = <h1>Hello, react</h1>;
// const element = <img src="logo.png" alt='logo' />;

// const todoItem = "掃除と洗濯";
// const element = <h1>task: {todoItem}</h1>;

// const HandleClick = () => {
//   alert("ボタンがクリックされました");
// }

// const element = (
//   <div>
//     <h1>Hello, react</h1>
//     <p>Welcome to the React application!</p>
//     <button onClick={HandleClick}>Click me!</button>
//   </div>
// );


type TodoItemProps = {
  task: string;
  deadline: string;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, deadline }) => {
  return (
    <div>
      <h2>Task: {task}</h2>
      <p>Deadline: {deadline}</p>
    </div>
  );
};

const TodoList: React.FC = () => {
  const todos = [
    { task: "掃除", deadline: "明日まで" },
    { task: "洗濯", deadline: "今日中" },
    { task: "買い物", deadline: "今週中" },
    { task: "宿題", deadline: "来週まで" },
    { task: "運動", deadline: "毎日" },
    { task: "読書", deadline: "今月中" },
    { task: "料理", deadline: "明日まで" },
    { task: "勉強", deadline: "毎日" },
    { task: "掃除", deadline: "明日まで" },
    { task: "洗濯", deadline: "今日中" },
  ];

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} task={todo.task} deadline={todo.deadline} />
      ))}
    </div>
  );
};

// // Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<TodoList />);
