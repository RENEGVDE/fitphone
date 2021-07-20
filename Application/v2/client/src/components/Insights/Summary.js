import React from "react";

const Summary = ({title, session_count, session_time}) => {
    return (
        <div className="sum_box">
            <div className="sum_title">{title}</div>
            <div className="sum_sessions">
                <div className="sum_label">Sessions</div>
                <div className="sum_amount">{session_count}</div>
            </div>
            <div className="sum_time">
                <div className="sum_label">Time</div>
                <div className="sum_amount">{session_time}</div>
            </div>

        </div>
    )
}

export default Summary;