import React, { useState } from "react";
import "./App.css";
import ChatCard from "./Component/ChatCard";

const App = () => {
  const [usersName, setUsersName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessage] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    setUsersName([...usersName, inputValue]);
    setInputValue("");
  };

  const handleSetMessage = (name, message) => {
    setMessage((prevData) => {
      const newData = [...prevData];
      const existingDataIndex = newData.findIndex((obj) => obj.name === name);

      if (existingDataIndex !== -1) {
        console.log({ existingDataIndex });
        newData[existingDataIndex].message.push(message);
      } else {
        newData.push({ name, message: [message] });
      }

      return newData;
    });
  };

  return (
    <div className="app">
      <header>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <button className="add-button" onClick={handleSendClick}>
          +
        </button>
      </header>
      <main className="main">
        {usersName.map((name) => {
          return (
            <ChatCard
              name={name}
              handleSetMessage={handleSetMessage}
              userInfo={messages}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
