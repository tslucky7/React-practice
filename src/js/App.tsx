import * as React from "react";
import { useAuth } from "./hooks/use-auth";
import { Login } from "./pages/login";
import { Todo } from "./pages/todo";

export const App = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return <Todo />;
};
