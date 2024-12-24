import React, { useState } from 'react';
import botChat from "../assets/logo.gif";
import './Chatbot.css';

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', bot: true}
  ]);;
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const apiResponse = async (prompt) => {
    try {
      const response = await fetch('https://verified-jaguar-champion.ngrok-free.app/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "prometeo_1",
          prompt: prompt,
          stream: false,
        }),
      });
  
      const data = await response.json(); 
  
      if (!data?.response) {
        throw new Error('response error');
      }
      return data; 

    } catch (error) {
      console.error('error',error.message);
      throw error;
    }
  };
  
  const userAsk = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    setIsLoading(true);
    try {
      const data = await apiResponse(inputMessage);
      const botMessage = {
        text: data.response || 'services not available, please try some time later',
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error.message);
      const errorMessage = {
        text: 'services not available, please try some time later',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            <h3>Chat Assistant</h3>
          </div>

          <div className="messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <div className="message-content">
                  <span className="bot">
                    {message.sender === 'bot' ? (
                      <img
                        src={botChat}
                        className="botImage"
                      />
                    ) : (
                      '👤'
                    )}
                  </span>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={userAsk} className="userInput">
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message.."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
