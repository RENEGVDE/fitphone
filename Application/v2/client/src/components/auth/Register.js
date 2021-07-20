import "../../styles/_register.scss";

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="register">
        <div className="register-wrapper">
          <div className="register-icons-wrapper">
            <Link to="/login">
              <img
                src="/icons/white-arrow-back.png"
                alt=""
                className="register__icon"
              />
            </Link>
            <img src="" alt="" className="register__icon" />
          </div>
          <div className="register-info-wrapper">
            <h3 className="register__title">Welcome to Agreement</h3>
            <span className="register__description">
              Create an account by filling in the following information.
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
          </div>

          <form className="register-forum" onSubmit={handleSubmit}>
            <div className="textbox-holder">
              <label className="label-box" for="email">
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
            <div className="textbox-holder">
              <label className="label-box" for="password">
                Confirm Password
              </label>
              <input
                className="text-box"
                type="password"
                id="password"
                name="password"
                ref={passwordConfirmRef}
                required
              ></input>
            </div>
            <button
              className="register__button"
              type="submit"
              disabled={loading}
            >
              Register
            </button>
          </form>
        </div>
        <div className="bottom-decoration-wrapper">
          <img
            className="bottom-decoration"
            src="/decorations/Bottom-decoration.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
