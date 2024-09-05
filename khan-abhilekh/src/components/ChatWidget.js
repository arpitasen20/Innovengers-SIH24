import React, { useState } from 'react';
import './ChatWidget.css'; // Import the styling

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            <div className={`chat-widget ${isOpen ? 'open' : 'closed'}`}>
                <div className="chat-header">
                    <h3>Chat with our AI ✨</h3>
                    <button className="new-chat">New Chat</button>
                    <button className="faq-button">See FAQ</button>
                </div>
                <div className="chat-body">
                    <div className="chat-message">
                        <p>Hi</p>
                    </div>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type a message..." />
                    <button className="send-button">➤</button>
                </div>
            </div>
            <button className="chat-toggle-button" onClick={toggleChat}>
                {isOpen ? 'Close' : 'Open Chat'}
            </button>
        </div>
    );
};

export default ChatWidget;
