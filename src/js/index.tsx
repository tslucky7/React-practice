import * as React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// const element = <h1>Hello, react</h1>;
// const element = <img src="logo.png" alt='logo' />;
const element = (
  <div>
    <h1>Hello, react</h1>
    <p>Welcome to the React application!</p>
  </div>
);

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(element);