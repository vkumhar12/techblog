// App.js
import React, { useState } from 'react';
// import ChatArea from './ChatArea';
// import MessageInput from './MessageInput';
// import UserList from './UserList';

const Message = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
    ];

    const sendMessage = (message) => {
        if (!selectedUser) return;
        const newMessage = {
            sender: 'You',
            text: message,
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="flex h-screen">
            <UserList users={users} setSelectedUser={setSelectedUser} />
            <ChatArea selectedUser={selectedUser} messages={messages} />
            {selectedUser && <MessageInput sendMessage={sendMessage} />}
        </div>
    );
};

export default Message;

// MessageInput.js

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

const ChatArea = ({ selectedUser, messages }) => {
    return (
        <div className="bg-gray-100 flex-1 p-4">
            <h2 className="text-xl font-semibold mb-4">{selectedUser ? `Chat with ${selectedUser.name}` : 'Select a user to chat'}</h2>
            <div className="overflow-y-auto h-full">
                {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-semibold">{message.sender}: </span>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const UserList = ({ users, setSelectedUser }) => {
    return (
        <div className="bg-gray-200 w-1/4 h-full p-4">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index} className="cursor-pointer mb-2" onClick={() => setSelectedUser(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};


