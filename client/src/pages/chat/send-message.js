import styles from "./styles.module.css";
import React, { useState } from "react";

const SendMessage = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      const __createdtime__ = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      socket.emit("send_message", { username, room, message, __createdtime__ });
      setMessage("");
    }
  };

  return (
    <div className={styles.sendMessageContainer}>
      <button className="btn btn-primary">
        <i class="fa-regular fa-image"></i>
      </button>
      <input
        className={styles.messageInput}
        placeholder="Type your message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="btn btn-primary" onClick={sendMessage}>
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default SendMessage;
