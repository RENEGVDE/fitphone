import "../../styles/_login.scss";

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="login">
        <div className="login-text-wrapper">
          <h3 className="login__title">Sign in to Agreement</h3>
          <p className="login__description">
            Sign in to Agreement or create an account.
          </p>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>

        <form className="login-forum" onSubmit={handleSubmit}>
          <div className="textbox-holder">
            <label className="label-box" for="username">
              Email
            </label>
            <input
              className="text-box"
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              required
            ></input>
          </div>
          <div className="textbox-holder">
            <label className="label-box" for="Password">
              Password
            </label>
            <input
              className="text-box"
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required
            ></input>
          </div>
          <div className="buttons">
            <button className="buttons__main" type="submit" disabled={loading}>
              Login
            </button>
          </div>
        </form>
        <div className="buttons">
          <div className="secondary-wrapper">
            <Link to="/forgot-password">
              <button className="secondary-wrapper__secondary">
                Forgot Password?
              </button>
            </Link>
            <Link to="/register">
              <button className="secondary-wrapper__secondary">Register</button>
            </Link>
            {/* <button className="secondary-wrapper__secondary">Info</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
