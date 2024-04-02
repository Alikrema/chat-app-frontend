import React from "react";
import "./ChatHeader.css";

function ChatHeader({ roomInfo }) {
  return <div className="chatHeader">{roomInfo.name}</div>;
}

export default ChatHeader;
