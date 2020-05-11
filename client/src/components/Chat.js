import React from "react";

export const Chat = () => {
  return (
    <React.Fragment>
      <div>
        <div class="chat-container">
          <div>
            <a href="index.html" class="btn btn-info">
              leave room
            </a>
            <i class="fab fa-invision fa-lg"></i>
            Interact
          </div>
          <main class="chat-main">
            <div class="chat-sidebar">
              <h3>
                <i class="fas fa-comments"></i> Room Name:
              </h3>
              <h2 id="room-name"></h2>
              <h3>
                <i class="fas fa-users"></i> Users
              </h3>
              <ul id="users"></ul>
            </div>
            <div class="chat-messages">
              <div class="message">
                <p class="meta">
                  Brad <span>9:12pm</span>
                </p>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, repudiandae.
                </p>
              </div>
            </div>
          </main>
          <div class="chat-form-container">
            <form id="chat-form">
              <input
                class="text-input"
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
              />
              <button class="btn btn-info">
                <i class="fas fa-paper-plane"></i> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chat;
