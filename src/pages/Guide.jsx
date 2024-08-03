// // // guide.jsx

// // import React, { useState } from 'react';
// // import {Link} from 'react-router-dom';
// // import Feedback from './pages/Feedback';
// // // Sample initial data for guides
// // const guidesData = [
// //     {
// //         id: 1,
// //         name: 'John Doe',
// //         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis tincidunt ipsum, id vehicula augue mollis id. Fusce id turpis ut nisl ultrices efficitur.',
// //         expertise: 'Local history, cultural tours, adventure sports',
// //         socialMedia: {
// //             facebook: 'https://www.facebook.com/johndoe',
// //             twitter: 'https://www.twitter.com/johndoe',
// //             instagram: 'https://www.instagram.com/johndoe',
// //         },
// //         posts: [
// //             { id: 1, title: 'Best Local Cuisine Spots', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// //             { id: 2, title: 'Hidden Gems in Mangalore', content: 'Nullam convallis tincidunt ipsum, id vehicula augue mollis id.' },
// //         ],
// //     },
// //     // Add more guides as needed
// // ];

// // const Guide = () => {
// //     const [selectedGuide, setSelectedGuide] = useState(null);
// //     const [visitorQuestion, setVisitorQuestion] = useState('');

// //     const handleGuideSelect = (guideId) => {
// //         const guide = guidesData.find(guide => guide.id === guideId);
// //         setSelectedGuide(guide);
// //     };

// //     const handleQuestionChange = (event) => {
// //         setVisitorQuestion(event.target.value);
// //     };

// //     const handleQuestionSubmit = (event) => {
// //         event.preventDefault();
// //         // Implement logic to handle submitting visitor's question to the guide
// //         console.log('Visitor question submitted:', visitorQuestion);
// //         // You can add further logic to handle sending the question to the guide's contact information
// //         // or integrating with a messaging system.
// //         setVisitorQuestion('');
// //     };

// //     return (
// //         <div>
// //             <h2>Meet Our Guides</h2>
// //             <div className="guides-list">
// //                 {guidesData.map(guide => (
// //                     <div key={guide.id} className="guide-card">
// //                         <h3>{guide.name}</h3>
// //                         <p>{guide.bio}</p>
// //                         <p><strong>Expertise:</strong> {guide.expertise}</p>
// //                         <div className="social-links">
// //                             <a href={guide.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
// //                             <a href={guide.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
// //                             <a href={guide.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
// //                         </div>
// //                         <button onClick={() => handleGuideSelect(guide.id)}>Contact {guide.name}</button>
// //                     </div>
// //                 ))}
// //             </div>

// //             {selectedGuide && (
// //                 <div className="selected-guide">
// //                     <h2>{selectedGuide.name}</h2>
// //                     <p>{selectedGuide.bio}</p>
// //                     <p><strong>Expertise:</strong> {selectedGuide.expertise}</p>
// //                     <div className="social-links">
// //                         <a href={selectedGuide.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
// //                         <a href={selectedGuide.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
// //                         <a href={selectedGuide.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
// //                     </div>
// //                     <h3>{selectedGuide.name}'s Posts and Recommendations</h3>
// //                     <ul>
// //                         {selectedGuide.posts.map(post => (
// //                             <li key={post.id}>
// //                                 <h4>{post.title}</h4>
// //                                 <p>{post.content}</p>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                     <form onSubmit={handleQuestionSubmit}>
// //                         <label>Ask {selectedGuide.name} a Question:</label>
// //                         <textarea value={visitorQuestion} onChange={handleQuestionChange} required />
// //                         <button type="submit">Submit</button>
// //                     </form>
// //                    <Link to="/pages/Feedback.jsx">Feedback</Link>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Guide;
// import React, { useState } from 'react';

// // Mock data
// const guide = {
//   name: 'John Doe',
//   bio: 'Experienced traveler and guide with 10 years of expertise in Southeast Asia.',
//   expertise: ['Southeast Asia', 'Backpacking', 'Cultural Tours'],
//   socialMedia: {
//     twitter: 'https://twitter.com/johndoe',
//     instagram: 'https://instagram.com/johndoe',
//   },
//   posts: [
//     'Top 10 Places to Visit in Thailand',
//     'A Backpacker’s Guide to Vietnam',
//     'Cultural Highlights of Cambodia',
//   ],
//   recommendations: [
//     'Try street food in Bangkok',
//     'Visit Angkor Wat in Cambodia',
//     'Take a boat tour in Ha Long Bay, Vietnam',
//   ],
// };

// const GuideProfilePage = () => {
//   const [contactMessage, setContactMessage] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [reviews, setReviews] = useState([]);

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     alert(`Message sent to ${guide.name}: ${contactMessage}`);
//     setContactMessage('');
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     setReviews([...reviews, feedback]);
//     setFeedback('');
//   };

//   return (
//     <div>
//       <section>
//         <h1>{guide.name}</h1>
//         <p>{guide.bio}</p>
//         <h3>Expertise:</h3>
//         <ul>
//           {guide.expertise.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//         <h3>Social Media:</h3>
//         <ul>
//           <li><a href={guide.socialMedia.twitter}>Twitter</a></li>
//           <li><a href={guide.socialMedia.instagram}>Instagram</a></li>
//         </ul>
//       </section>

//       <section>
//         <h2>Posts and Travel Recommendations</h2>
//         <h3>Posts:</h3>
//         <ul>
//           {guide.posts.map((post, index) => (
//             <li key={index}>{post}</li>
//           ))}
//         </ul>
//         <h3>Travel Recommendations:</h3>
//         <ul>
//           {guide.recommendations.map((rec, index) => (
//             <li key={index}>{rec}</li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2>Contact {guide.name}</h2>
//         <form onSubmit={handleContactSubmit}>
//           <textarea
//             value={contactMessage}
//             onChange={(e) => setContactMessage(e.target.value)}
//             placeholder="Write your message here"
//           />
//           <button type="submit">Send</button>
//         </form>
//       </section>

//       <section>
//         <h2>Feedback and Reviews</h2>
//         <form onSubmit={handleFeedbackSubmit}>
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             placeholder="Write your feedback here"
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <h3>Reviews:</h3>
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index}>{review}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default  guide;
import React, { useState } from 'react';

const Guide = () => {
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');
    const [posts, setPosts] = useState([]);

    const handleContactSubmit = (event) => {
        event.preventDefault();
        // Simulate sending message to guide (replace with actual backend integration)
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        // Simulate submitting feedback (replace with actual backend integration)
        const newFeedback = { text: feedback, timestamp: new Date().toLocaleString() };
        setPosts([...posts, newFeedback]);
        setFeedback('');
    };

    return (
        <div className="guide-profile-page">
            {/* Detailed Profile Section */}
            <div className="guide-profile">
                <strong>Guide Profile</strong>
                <p><strong>Name</strong> : John Doe</p>
                <p><strong>Bio</strong> : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis orci ac ligula euismod imperdiet.</p>
                <p><strong>Expertise</strong>  : Local culture, historical sites, cuisine</p>
                <p><strong>Social Media</strong> :
                    <a href="https://twitter.com/johndoe">Twitter</a>
                    <a href="https://instagram.com/johndoe">Instagram</a>
                    {/* Add other social media links as needed */}
                </p>
            </div>

            {/* List of Posts and Travel Recommendations */}
            <div className="guide-posts">
                <strong>Posts and Travel Recommendations</strong>
                {posts.length > 0 ? (
                    <ul>
                        {posts.map((post, index) => (
                            <li key={index}>
                                <p>{post.text}</p>
                                <span>{post.timestamp}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No posts yet.</p>
                )}
            </div>

            {/* Interactive Contact Section */}
            <div className="guide-contact-form">
                <strong>Contact Guide</strong>
                <form onSubmit={handleContactSubmit}>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Feedback and Review Section */}
            <div className="guide-feedback">
                <strong>Feedback and Reviews</strong>
                <form onSubmit={handleFeedbackSubmit}>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Provide your feedback..."
                        required
                    ></textarea>
                    <button type="submit">Submit Feedback</button>
                </form>
                <div className="feedback-list">
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post, index) => (
                                <li key={index}>
                                    <p>{post.text}</p>
                                    <span>{post.timestamp}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No feedback yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Guide;
