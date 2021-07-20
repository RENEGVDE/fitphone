import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Insight.scss";
import Summary from "./Summary";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import FooterBar from "../footer";

class Insight extends Component {
  state = {
    user: {
      id: 1,
      name: "Amin",
      picture: "boy.png",
    },
    data: {
      daily: {
        total_time: "00:01:00",
        sessions: ["1"],
      },
      weekly: {
        total_time: "00:31:45",
        sessions: ["1", "2"],
      },
    },
  };

  componentDidMount() {
    //Fetch data => Make sure daily is only last 7 days. Make sure total_time is calculated
  }

  render() {
    return (
      <container>
        <center>
          <div className="profile">
            <img
              className="insightsImg"
              src={this.state.user.picture}
              alt="this is you"
            />
            <div className="profile_name">{this.state.user.name}</div>
          </div>
          <div className="daily_summary">
            <Summary
              title="Daily"
              session_count={this.state.data.daily.sessions.length}
              session_time={this.state.data.daily.total_time}
            />
          </div>
          <div className="weekly_summary">
            <Summary
              title="Weekly"
              session_count={this.state.data.weekly.sessions.length}
              session_time={this.state.data.weekly.total_time}
            />
          </div>
          <div className="graph">
            <Chart
              title="Daily"
              xAxis="Days"
              xAxisFormat="DDDD"
              data={this.state.data.weekly.sessions}
            />
          </div>
        </center>
        <FooterBar />
      </container>
    );
  }
}

export default Insight;

Insight.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    picture: PropTypes.string,
  }),
  data: PropTypes.shape({
    daily: PropTypes.shape({
      total_count: PropTypes.number,
      total_time: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.instanceOf(Date),
          duration: PropTypes.number,
          status: PropTypes.string,
        })
      ),
    }),
    weekly: PropTypes.shape({
      total_count: PropTypes.number,
      total_time: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.instanceOf(Date),
          duration: PropTypes.number,
          status: PropTypes.string,
        })
      ),
    }),
  }),
};
