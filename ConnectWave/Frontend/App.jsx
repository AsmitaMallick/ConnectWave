import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';

let e;
e.target.value = undefined;

function App() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [interests, setInterests] = useState([]);
    const [chat, setChat] = useState(null);

    useEffect(() => {
        // Fetch users and interests when the component loads
        fetchUsers();
        fetchInterests();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    const fetchInterests = async () => {
        try {
            const response = await axios.get('/api/interests');
            setInterests(response.data);
        } catch (error) {
            console.error('Error fetching interests', error);
        }
    };

    const sendInterest = async (recipientId) => {
        try {
            await axios.post('/api/interests', { recipient: recipientId });
            await fetchInterests();
        } catch (error) {
            console.error('Error sending interest', error);
        }
    };

    const acceptInterest = async (interestId) => {
        try {
            await axios.post(`/api/interests/${interestId}/accept`);
            fetchInterests();
            // Set up chat after interest is accepted
            setChat({ recipientId: interestId });
        } catch (error) {
            console.error('Error accepting interest', error);
        }
    };

    const rejectInterest = async (interestId) => {
        try {
            await axios.post(`/api/interests/${interestId}/reject`);
            await fetchInterests();
        } catch (error) {
            console.error('Error rejecting interest', error);
        }
    };

    const sendMessage = async (message) => {
        try {
            await axios.post(`/api/chats/${chat.recipientId}`, { message });
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div>
            <header>
                <h1>Interest Messaging App</h1>
            </header>

            <div className="container">
                {user ? (
                    <div>
                        <h2>Welcome, {user.username}</h2>
                        <h3>Users</h3>
                        <ul>
                            {users.map((u) => (
                                <li key={u.id}>
                                    {u.username}{' '}
                                    <button onClick={() => sendInterest(u.id)}>Send Interest</button>
                                </li>
                            ))}
                        </ul>

                        <h3>Your Interests</h3>
                        <ul>
                            {interests.map((interest) => (
                                <li key={interest.id}>
                                    {interest.sender.username}{' '}
                                    <button onClick={() => acceptInterest(interest.id)}>Accept</button>
                                    <button onClick={() => rejectInterest(interest.id)}>Reject</button>
                                </li>
                            ))}
                        </ul>

                        {chat && (
                            <div className="chat">
                                <h3>Chat</h3>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            sendMessage(e.target.value);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2>Please log in</h2>
                        {/* Implement your login form here */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
