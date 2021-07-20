import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import "../../styles/_login.scss";
import "../../styles/_timer.scss";
import "../../styles/_register.scss";

let socket;

const Create = ({ location }) => {
  // const [porpuse, setPorpuse] = useState("");
  const [room, setRoom] = useState("");

  const [min, setMin] = useState("");
  const [hour, setHour] = useState("");

  const { currentUser } = useAuth();

  let name = currentUser.email;

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    // setName("Amin");
    setRoom(room);
    socket.emit("join", { name, room });
  }, [ENDPOINT, location.search]);

  return (
    <div className="timer">
      {/* 

            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Set up desired time </Form.Label>
                    <Form.Control size='lg' placeholder='What we call you?' type='text' onChange={(event) => setName(event.target.value)} /> */}

      <div className="timer-wrapper">
        <div className="timer-icons-wrapper-create">
          <Link to={`/`}>
            <img
              src="/icons/white-arrow-back.png"
              alt=""
              className="lobby__icon"
            />
          </Link>
        </div>
        <div className="timer-info-wrapper">
          <h3 className="timer__title">Create a Lobby</h3>
          <span className="timer__description">
            Please set up an agreement and duration.
          </span>
        </div>
        {/* <div className='infoBar'>
                        <p>You can share this Code with your frinds!<hr />
                        <b>{room}</b> <span><i class="far fa-copy"></i></span></p>
                        </div> */}
        <div className="agreement_purpos">
          <label className="purpose__label">
            Your Email
            <input
              className="purpose__input"
              disabled="true"
              value={name}
              placeholder="What should we call you?!"
            />
          </label>

          <label className="purpose__label">Agreement</label>
          <input
            className="purpose__input"
            placeholder="E.g : The person losing ..."
          />
        </div>

        <div>Timer:</div>
        <div className="timer_selector_container">
          {/* hours */}
          <div className="clock_col">
            <div className="clock_handle">
              <i class="far fa-angle-up"></i>
            </div>
            <input
              id="hour"
              className="clock_numbers"
              placeholder="0"
              type="numebr"
              onChange={(event) => setHour(event.target.value)}
            />

            <div className="clock_handle">
              <i class="far fa-angle-down"></i>
            </div>
          </div>

          {/* mins */}
          <div className="clock_col">
            <div className="clock_handle">
              <i class="far fa-angle-up"></i>
            </div>
            <input
              className="clock_numbers"
              placeholder="0"
              type="numebr"
              onChange={(event) => setMin(event.target.value)}
            />

            <div className="clock_handle">
              <i class="far fa-angle-down"></i>
            </div>
          </div>
        </div>

        <Link
          onClick={(e) => (!hour || !min || !room ? e.preventDefault() : null)}
          to={`/Agreement?name=${name}&room=${room}&hour=${hour}&min=${min}`}
        >
          <button className=" timer__button">Continue</button>
        </Link>
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
export default Create;
