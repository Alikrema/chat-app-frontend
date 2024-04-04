import React from "react";
import "./ChatPanelHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function ChatPanelHeader() {
  return (
    <div className="chatPanelHeader">
      <div className="headerTitle">Chats</div>
      <div className="headerButton">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
}

export default ChatPanelHeader;
