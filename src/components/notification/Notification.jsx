import React from "react";

function Notification({ notification }) {
  return (
    <div className="alert_container">
      <div className={`alert alert_${notification.type}`}>
        {notification.text}
      </div>
    </div>
  );
}

export default Notification;
