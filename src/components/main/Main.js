import styles from "./Main.module.css";
import Spinner from "../ui/Spinner";

function createDate(date) {
  const generateDate = new Date(date);
  const result = generateDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return result;
}

function Main({ userInfo, themeMode, isLoading, error }) {
  const createdAt = createDate(userInfo.created_at);
  if (error) {
    return (
      <div
        className={`${styles.containerLoadErr} ${styles.containerError} ${
          !themeMode && styles.containerDarkMode
        }`}
      >
        <p>Oops!!!</p>
        <div>
          <p>There is no result found</p>
          <p>please try again</p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        className={`${styles.containerLoadErr} ${
          !themeMode && styles.containerDarkMode
        }`}
      >
        <Spinner />
      </div>
    );
  }
  return (
    <div
      className={`${styles.container} ${
        !themeMode && styles.containerDarkMode
      }`}
    >
      <div className={styles.imgDiv}>
        <img
          src={userInfo.avatar_url}
          alt={`${userInfo.name} avatar`}
          className={styles.img}
        />
      </div>
      <div>
        <div className={styles.nameDiv}>
          <div>
            <h1 className={styles.name}>{userInfo.name}</h1>
            <a className={styles.userName} href={userInfo.html_url}>
              @{userInfo.login}
            </a>
          </div>
          <p
            className={`${styles.joiningDate} ${themeMode && styles.darkMode}`}
          >
            Joined {createdAt}
          </p>
        </div>
      </div>
      <div className={styles.userDetailsDiv}>
        <p className={`${styles.bio} ${themeMode && styles.darkMode}`}>
          {userInfo.bio ? userInfo.bio : "This profile has no bio"}
        </p>
        <div
          className={`${styles.countDiv} ${
            themeMode ? styles.countLightMode : styles.countDarkModeDivBG
          }`}
        >
          <div>
            <p
              className={`${styles.countHeading} ${
                themeMode && styles.darkMode
              }`}
            >
              Repos
            </p>
            <span className={styles.countNumber}>{userInfo.public_repos}</span>
          </div>
          <div>
            <p
              className={`${styles.countHeading} ${
                themeMode && styles.darkMode
              }`}
            >
              Followers
            </p>
            <span className={styles.countNumber}>{userInfo.followers}</span>
          </div>
          <div>
            <p
              className={`${styles.countHeading} ${
                themeMode && styles.darkMode
              }`}
            >
              Following
            </p>
            <span className={styles.countNumber}>{userInfo.following}</span>
          </div>
        </div>
        <div className={styles.contactInfoDiv}>
          <div className={`${styles.contact} ${themeMode && styles.darkMode}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${"w-6"} ${"h-6"} ${styles.contactIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {userInfo.location ? userInfo.location : "Not available"}
          </div>
          <div className={`${styles.contact} ${themeMode && styles.darkMode}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${"w-6"} ${"h-6"} ${styles.contactIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            {userInfo.twitter_username
              ? userInfo.twitter_username
              : "Not available"}
          </div>
          <div className={`${styles.contact} ${themeMode && styles.darkMode}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${"w-6"} ${"h-6"} ${styles.contactIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            {userInfo.blog ? (
              <a href={userInfo.blog} className={styles.contactLink}>
                {userInfo.blog}
              </a>
            ) : (
              "Not available"
            )}
          </div>
          <div className={`${styles.contact} ${themeMode && styles.darkMode}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${"w-6"} ${"h-6"} ${styles.contactIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            {userInfo.company ? (
              <a href={userInfo.company} className={styles.contactLink}>
                {userInfo.company}
              </a>
            ) : (
              "Not available"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
