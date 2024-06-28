import React, { useState } from "react";
import "./notification.css";
import { close, close1 } from "../../assets/assets";
import { weatherNotifications } from "../../utils/utils";

const Notification = ({setNotification,notification}) => {
  const [notifications_items, setNotificationsItems] = useState(weatherNotifications);

  const removeNotification = (index) => {
    setNotificationsItems(notifications_items.filter((_, i) => i !== index));
  };

  return (
    <div className="notification">
      <div className="notification_head">
        <p className="Notification_title">Notification</p>
        <img
          src={close}
          className="close"
          alt=""
          onClick={() => setNotification(!notification)} 
        />
      </div>
      {notifications_items.map((item, index) => (
        <div className="notification_content" key={index}>
          <img
            src={close1}
            className="notification-close"
            alt="close"
            onClick={() => removeNotification(index)}
          />
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
