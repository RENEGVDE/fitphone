import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Users from "../Users/Users";
import "../../styles/_register.scss";
import "../../styles/_login.scss";
import "../../styles/_agreement.scss";
import { Route, Redirect, Link } from "react-router-dom";

import { Timer } from "react-countdown-clock-timer";

let socket;

const Agreement = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [users, setUsers] = useState("");

  const [min, setMin] = useState("");
  const [hour, setHour] = useState("");

  const ENDPOINT = "https://smfitphone.herokuapp.com/";

  var connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  useEffect(() => {
    const { name, room, hour, min } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT, connectionOptions);
    setName(name);
    setRoom(room);
    setHour(hour);
    setMin(min);

    console.log(users);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  let taskCompleted = false;
  return (
    <div className="lobby">
      <div className="lobby-wrapper">
        <div className="lobby-icons-wrapper">
          {/* <Link to={`/Results?res=${false}&hour=${hour}&min=${min}`} >
            <img
              src="/icons/white-arrow-back.png"
              alt=""
              className="lobby__icon"
            />
          </Link> */}
          <Link to={`/Results?res=${false}&hour=${hour}&min=${min}`}>
            <img src="/icons/white-close.png" alt="" className="lobby__icon" />
          </Link>{" "}
        </div>

        <div className="lobby-clock">
          <img className="lobby-img" src="/Logo/Logo.png" alt="" />
          {hour && min ? (
            <Timer
              durationInSeconds={hour * 3600 + min * 60}
              formatted={true}
              isPaused={false}
              onFinish={() => {
                window.location.href = `/Results?res=${true}&hour=${hour}&min=${min}`;
              }}
            />
          ) : (
              <Timer
                durationInSeconds={1 * 3600 + 19 * 60}
                formatted={true}
                isPaused={false}
                onFinish={() => {
                  window.location.replace = `/Results?res=${true}&hour=${hour}&min=${min}`;
                }}
              />
            )}
        </div>

        <div className="user-container">
          <Users users={users} />
        </div>

        <div className="lobby-info-wrapper">
          <b>Agreement: {room}</b>
          <p>Agreemnt info lorem ipsum </p>
        </div>
      </div>
      <div className="bottom-decoration-wrapper">
        <img
          className="bottom-decoration"
          src="/decorations/Bottom-decoration.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Agreement;

//
