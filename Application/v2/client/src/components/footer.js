import "../styles/_footer.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class FooterBar extends Component {
  state = {};
  render() {
    return (
      <nav className="footer">
        <div className="footer__item-wrapper">
          <Link to={`/`}>
            <img
              src="/icons/agreement_icon.png"
              alt=""
              className="footer__img"
            />
          </Link>
        </div>
        <div className="footer__item-wrapper">
          <Link to={`/Insight`}>
            <img src="/icons/inights_icon.jpg" alt="" className="footer__img" />
          </Link>
        </div>
        <div className="footer__item-wrapper">
          <Link to={`/profile`}>
            <img src="/icons/profile_icon.png" alt="" className="footer__img" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default FooterBar;
