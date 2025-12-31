import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const USER_NAME_KEY = "user-name";

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } =
    useContext(AuthContext);

  const login = () => {
    if (userName) {
      setIsLoggedIn(true);
      localStorage.setItem(USER_NAME_KEY, userName);
    } else {
      alert("ユーザー名を入力してください");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("user-name");
  };

  // マウント時にLocalStorageからユーザー名を取得する
  // ユーザー名が取得できた場合はログイン中として扱う
  useEffect(() => {
    const userNameData = localStorage.getItem(USER_NAME_KEY);
    if (userNameData) {
      setUserName(userNameData);
      setIsLoggedIn(true);
    }
  }, []);

  return { isLoggedIn, login, logout, userName, setUserName };
};
