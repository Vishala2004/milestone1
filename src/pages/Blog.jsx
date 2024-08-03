// blog.jsx

import React from 'react';

// Sample initial blog data (for tourism)
const initialTourismBlogPosts = [
    {
        id: 1,
        title: 'Exploring Mangalore: A Hidden Gem on the Coast',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tincidunt ipsum, id vehicula augue mollis id.',
      
        category: 'Destination',
        destination: 'Mangalore',
        date: '2024-06-28',
        author: 'John Doe',
    },
    {
        id: 2,
        title: 'Top 10 Must-Visit Places in Mangalore',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce feugiat elit ac mauris rhoncus, sed eleifend purus interdum.',
       
        destination: 'Mangalore',
        date: '2024-06-25',
        author: 'Jane Smith',
    },
    {
        id: 3,
        title: 'Cuisine Delights of Mangalore',
        content: 'Etiam vel aliquet velit. Proin non consectetur purus. Fusce vel nisi nec enim euismod iaculis.',
       
        category: 'Food & Drink',
        destination: 'Mangalore',
        date: '2024-06-20',
        author: 'Emily Johnson',
    },
    // Add more posts as needed
];

const Blog = () => {
    return (
        <div className="blog-container">
            <h2>Latest Tourism Blog Posts</h2>
            <ul className="blog-list">
                {initialTourismBlogPosts.map(post => (
                    <li key={post.id} className="blog-post">
                        {/* <div className="blog-post-image">
                            <img src={"https://www.splendidtraveler.co.in/wp-content/uploads/2023/05/Splendid-Traveler-Travel-Diaries-Blog.png"} alt={post.title} />
                        </div> */}
                        <div className="blog-post-content">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p><strong>Category:</strong> {post.category}</p>
                            <p><strong>Destination:</strong> {post.destination}</p>
                            <p><strong>Date:</strong> {post.date}</p>
                            <p><strong>Author:</strong> {post.author}</p>
                            {/* Option to navigate to full post or read more */}
                            {/* <a href={`/blog/${post.id}`}>Read More</a> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog
