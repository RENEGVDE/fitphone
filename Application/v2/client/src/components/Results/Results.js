import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "../../styles/_register.scss";
import "../../styles/_login.scss";
import "../../styles/_results.scss";
import { Link } from "react-router-dom";

let socket;

const Results = ({ location }) => {
  const [res, setRes] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const ENDPOINT = "localhost:5000";

  var connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  useEffect(() => {
    const { res, hour, min } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT, connectionOptions);
    setRes(res);
    setHour(hour);
    setMin(min);
  }, [ENDPOINT, location.search]);
  return res === "true" ? (
    <div className="mainResultContainer">
      <div className="MainTextContainer">
        <h2>Great</h2>
        <p>You finnished the agreement successfully</p>
      </div>
      <div className="timing">
        <p>Time off phone:</p>
        <h2>
          <t>
            {hour} Hours and {min} minutes
          </t>
        </h2>
      </div>
      <Link to='/' >
        <button className="btn btn-success resButton">Continue </button>
      </Link>
    </div>
  ) : (
      <div className="DmainResultContainer">
        <div className="DMainTextContainer">
          <h2>Oh No!!</h2>
          <p>You did not finnished the agreement successfully</p>
        </div>
        <div className="Dtiming">
          <p>Time off phone:</p>
          <h2>
            <t>0 Hours and {1} minutes</t>
          </h2>
        </div>
        <Link to='/' >
          <button className="btn btn-danger DresButton">Continue </button>
        </Link>
      </div>
    );
};
export default Results;
