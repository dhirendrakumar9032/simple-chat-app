import React, { useState } from "react";
import "./ChatCard.css";
import avatar from "../resources/boy-avatar.svg";

const ChatCard = React.memo(({ name, handleSetMessage, userInfo }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    handleSetMessage(name, message);
    setMessage("");
  };

  return (
    <div className="chat-window">
      <header className="header">
        <img src={avatar} alt="avatar" />
        {name}
      </header>
      <div className="chat-body">
        {userInfo.map((user, index) =>
          user.message.map((message) => (
            <div className="chat-list" key={index}>
              <h3>{user.name === name ? <>You :</> : <>{user.name} :</>}</h3>
              <p>{`${message}`}</p>
            </div>
          ))
        )}
      </div>
      <footer className="footer">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSendClick}>Send</button>
      </footer>
    </div>
  );
});

export default ChatCard;
