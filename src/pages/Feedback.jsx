// feedback.jsx

import React, { useState } from 'react';

// Sample initial feedback data (can be fetched from a backend)
const initialFeedback = [
    { id: 1, name: 'John Doe', comment: 'Great guide! Very informative.', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'Could use more details.', rating: 3 },
];

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState(initialFeedback);
    const [newFeedback, setNewFeedback] = useState({ name: '', comment: '', rating: 0 });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewFeedback({ ...newFeedback, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFeedback.name && newFeedback.comment && newFeedback.rating > 0) {
            const newId = feedbackList.length + 1;
            const feedbackItem = { id: newId, ...newFeedback };
            setFeedbackList([...feedbackList, feedbackItem]);
            setNewFeedback({ name: '', comment: '', rating: 0 });
        } else {
            alert('Please fill out all fields and select a rating.');
        }
    };

    return (
        <div>
            <h2>Visitor Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={newFeedback.name} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea name="comment" value={newFeedback.comment} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Rating:</label>
                    <select name="rating" value={newFeedback.rating} onChange={handleInputChange} required>
                        <option value="0">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>

            <div>
                <h3>Recent Feedback</h3>
                <ul>
                    {feedbackList.map(feedback => (
                        <li key={feedback.id}>
                            <strong>{feedback.name}</strong> rated it {feedback.rating}/5: {feedback.comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Feedback;
    