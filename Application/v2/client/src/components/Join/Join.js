import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/_login.scss";
import "../../styles/_join.scss";
import "../../styles/_register.scss";
import FooterBar from "../footer";
import { useAuth } from "../../contexts/AuthContext";

var hiddenCode = false;

const Join = () => {
  // const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const { currentUser } = useAuth();

  var NewRoomId = "";

  const [time, setTime] = useState("");

  let name = currentUser.email;

  function generateRoomId() {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      NewRoomId += characters.charAt(Math.floor(Math.random() * 5));
    }
    hiddenCode = true;
    return setRoom(NewRoomId);
  }

  return (
    <div className="join">
      <img className="join__img" src="decorations/Top-decoration.png" alt="" />
      <div className="join-wrapper">
        {/*<div className="join-icons-wrapper">
           <Link to="/">
            <img
              src="/icons/white-arrow-back.png"
              alt=""
              className="lobby__icon"
            />
          </Link>

          <Link to={`/`}>
            <i class="fas fa-ellipsis-h lobby__icon"></i>
          </Link> 
        </div>*/}
        <div className="join-info-wrapper">
          <h3 className="join__title">Welcome back</h3>
          <span>{name}</span>
          <p className="join__description">Join a room or create a new room.</p>
        </div>

        {/* Join a lobby */}

        {/* <div className="join_selector_container">
          <input
            placeholder="What we call you?"
            type="text"
            onChange={(event) => setName(event.target.value)}
            aria-describedby="basic-addon2"
            className="inputName"
          />
        </div> */}

        {/*Create an agreement  */}
        <div className="join_selector_container">
          <input
            placeholder="Room Code"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            aria-describedby="basic-addon2"
            className="inputCode"
          />

          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/Agreement?name=${name}&room=${room}`}
          >
            <button className="btn joinBtn">
              <i class="fas fa-angle-right"></i>
            </button>
          </Link>
          {(() => {
            if (!hiddenCode) {
              return (
                <div className="button-wrapper">
                  <button className="btn createBtn" onClick={generateRoomId}>
                    Create Room
                  </button>
                </div>
              );
            } else {
              return (
                <div className="show-room">
                  <div className="infoBar">
                    Your Room code : <b>{room}</b>
                  </div>
                  <Link
                    onClick={(e) => (!room ? e.preventDefault() : null)}
                    to={`/Create?&room=${room}`}
                  >
                    <button className="btn createBtn">Settings</button>
                  </Link>
                </div>
              );
            }
          })()}
        </div>
      </div>
      <FooterBar />
    </div>
  );
};
export default Join;
