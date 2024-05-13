// MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-200 p-4">
            <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                className="w-full p-2 rounded"
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
        </form>
    );
};

export default MessageInput;
