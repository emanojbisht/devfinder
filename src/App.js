import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Search from "./components/search/Search";
import { useEffect, useReducer } from "react";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const username = localStorage.getItem("username");

function reducer(state, action) {
  switch (action.type) {
    case "changeMode":
      return { ...state, mode: !state.mode };
    case "userInfo":
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
        error: false,
      };
    case "username":
      return { ...state, inputUsername: action.payload };
    case "loading":
      return { ...state, isLoading: true };
    case "errorOccured":
      return { ...state, error: true, isLoading: false };
    default:
      throw new Error("Action unknown");
  }
}

const initalState = {
  mode: true, //true -> lightMode , false -> darkMode
  userInfo: {},
  inputUsername: username ? username : "emanojbisht",
  isLoading: false,
  error: false,
};

function App() {
  const [{ mode, userInfo, inputUsername, isLoading, error }, dispatch] =
    useReducer(reducer, initalState);
  useEffect(
    function () {
      async function fetchUserInfo() {
        dispatch({ type: "loading" });
        try {
          const res = await fetch(
            `https://api.github.com/users/${inputUsername}`
          );
          if (!res.ok) {
            throw new Error("no result found");
          }
          const data = await res.json();
          localStorage.setItem("username", data.login);
          dispatch({ type: "userInfo", payload: data });
        } catch (error) {
          dispatch({ type: "errorOccured" });
        }
      }
      fetchUserInfo();
    },
    [inputUsername]
  );

  useEffect(
    function () {
      const bodyEl = document.querySelector("body");
      if (!mode) {
        bodyEl.classList.add("darkMode");
      } else {
        bodyEl.classList.remove("darkMode");
      }
    },
    [mode]
  );

  return (
    <div className={styles.container}>
      <Header themeMode={mode} dispatch={dispatch} />
      <Search themeMode={mode} dispatch={dispatch} error={error} />
      <Main
        themeMode={mode}
        userInfo={userInfo}
        inputUsername={inputUsername}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default App;
