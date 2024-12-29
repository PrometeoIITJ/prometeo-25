import React, { useState } from 'react';
import botChat from "../assets/botImage.png";
import './Chatbot.css';

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot'}
  ]);;
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const apiResponse = async (prompt) => {
    try {
      const response = await fetch('https://verified-jaguar-champion.ngrok-free.app/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "prometeo_iter3",
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
      setIsOnline(false);
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
    const botMessage = { text: ' ...', sender: 'bot' };
    setMessages((prev) => [...prev, botMessage]); 
    setIsLoading(true);
    try {
      const data = await apiResponse(inputMessage);
      const botMessage = {
        text: data.response || 'services not available, please try some time later',
        sender: 'bot',
      };

      setMessages((prev) =>{
        const updatedMessages = [...prev];
        const lastMessage = updatedMessages[updatedMessages.length - 1];
        if (lastMessage.sender === 'bot') {
          lastMessage.text = botMessage.text;
        }
        return updatedMessages;
      } );
      setIsOnline(true)
    } catch (error) {
      console.error('Chat Error:', error.message);
      const errorMessage = {
        text: 'services not available, please try some time later',
        sender: 'bot',
      };
      setIsOnline(false);
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header flex gap-2">
            <img src={botChat} className='h-9' />
            <div>
              <h3 className='saga pl-0'>Saga</h3>
             { isOnline?
              (<p className='online'> <span className='text-[10px]'>🟢</span> Online</p>):
              (<p className='online text-red-600'> <span className='text-[10px]'>🔴</span> Offline</p>)}
            </div>
            
          </div>

          <div className="messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <div className="message-content">
                  <span className="bot">
                    {message.sender === 'bot' ? (
                      <img
                        src={botChat}
                        className="botImage w-9"
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
              placeholder="Ask me Anything"
            />
            <button type="submit">➤</button>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
