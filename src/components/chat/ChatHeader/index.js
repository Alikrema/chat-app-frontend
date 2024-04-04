import React from "react";
import "./ChatHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
function ChatHeader({ roomInfo }) {
  return (
    <div className="chatHeader">
      <div className="chatHeaderName">{roomInfo.name}</div>
      <div className="chatHeaderBack">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
}

export default ChatHeader;
