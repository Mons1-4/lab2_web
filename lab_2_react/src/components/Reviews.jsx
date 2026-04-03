import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="reviews" className="bg-white p-6 rounded-lg text-left mt-6">
      <h2 className="text-xl font-bold mb-4">Відгуки</h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="font-bold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{review.email}</p>
            <p className="text-gray-700">"{review.body}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
