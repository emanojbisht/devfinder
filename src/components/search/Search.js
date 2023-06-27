import { useRef } from "react";
import styles from "./Search.module.css";
function Search({ themeMode, dispatch, error }) {
  const usernameRef = useRef();
  function searchUsername() {
    if (!usernameRef.current.value) return;
    dispatch({ type: "username", payload: usernameRef.current.value });
    usernameRef.current.value = "";
  }

  function enterPress(key) {
    if (key.code === "Enter") searchUsername();
  }

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${!themeMode && styles.darkMode}`}
        type="text"
        placeholder="Search Github username..."
        ref={usernameRef}
        onKeyDown={(e) => enterPress(e)}
      />
      {error && <p className={styles.errorNotFound}>no result found</p>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${"w-6"} ${"h-6"} ${styles.icon}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <button className={styles.btn} onClick={searchUsername}>
        Search
      </button>
    </div>
  );
}

export default Search;
