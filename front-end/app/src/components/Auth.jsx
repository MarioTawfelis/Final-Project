import React, { useState } from "react";
import "../assets/styles/auth.css";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call your authentication API to verify credentials
    // If credentials are valid, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-box">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome {username}!</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Auth;
