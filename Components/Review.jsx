"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Cameron Williamvvson",
      time: "3 days",
      comment: "Very Nice!!",
      rating: 4,
      likes: 10,
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleAddReview = () => {
    if (newComment.trim() === "" || newRating === 0) return;

    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        name: "Anonymous User",
        time: "Just now",
        comment: newComment,
        rating: newRating,
        likes: 0,
      },
    ]);
    setNewComment("");
    setNewRating(0);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="mb-6 border-b border-gray-200 pb-4 flex space-x-6">
        <button className="text-gray-600 font-semibold">Details</button>
        <button className="text-blue-600 font-semibold border-b-2 border-blue-600">
          Review & Rating
        </button>
        <button className="text-gray-600 font-semibold">Discussion</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Reviews */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <select className="border rounded px-3 py-2 text-gray-600">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>
          </div>

          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b py-4 flex space-x-4 items-start"
            >
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.time}</p>
                <div className="flex items-center my-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <div className="flex items-center space-x-2 mt-2 text-gray-500">
                  <button className="flex items-center">
                    👍 {review.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Rating Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Review</h3>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < 4 ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-3 text-gray-700">(4.0)</span>
          </div>
          <ul>
            {[5, 4, 3, 2, 1].map((star) => (
              <li key={star} className="flex items-center space-x-2 mb-2">
                <span className="text-gray-700">{star} star</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-yellow-500 rounded"
                    style={{ width: `${star * 10}%` }}
                  ></div>
                </div>
                <span className="text-gray-700">{star * 10}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add a Review */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Add a Review</h3>
        <div className="flex items-center space-x-4 mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              onClick={() => setNewRating(index + 1)}
              className={`cursor-pointer ${
                index < newRating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full border rounded-lg p-3 text-gray-700 focus:outline-blue-600"
        ></textarea>
        <button
          onClick={handleAddReview}
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
