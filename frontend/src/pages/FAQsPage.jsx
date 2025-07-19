import React from "react";
import { FaQuestionCircle, FaFilter, FaCogs, FaStar } from "react-icons/fa";

const FAQsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 font-sans text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <FaQuestionCircle className="text-5xl text-blue-500 mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold">FAQs - Hotel Recommendation System</h1>
        <p className="text-md text-gray-500 mt-2">
          Everything you need to know about how our system works!
        </p>
      </div>

      {/* Question 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 mb-3">
          <FaStar className="text-yellow-500" />
          What is a Recommendation System?
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          A recommendation system is a technology that analyzes user preferences and data to suggest items — in our case, hotels — that best match what you might like.
          It helps you discover hotels tailored to your tastes without the need to search manually through all options.
        </p>
      </section>

      {/* Question 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 mb-3">
          <FaFilter className="text-green-600" />
          How does our system filter hotels?
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          Our system filters hotels based on several criteria such as location, price range, available features (like wifi, breakfast, spa), and user preferences.
          Each hotel is scored by how well it matches these filters combined with a user preference profile, and the top matches are recommended.
        </p>
        <ul className="list-disc list-inside text-gray-500 space-y-1">
          <li><strong> Location:</strong> Hotels in your chosen city or nearby areas.</li>
          <li><strong> Price:</strong> Budget, medium, or high-end options based on your preference.</li>
          <li><strong> Features:</strong> Amenities like wifi, parking, spa, breakfast, lake view, and more.</li>
          <li><strong> User Preferences:</strong> Likes and priorities you have set beforehand in your profile.</li>
        </ul>
      </section>

      {/* Question 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 mb-3">
          <FaCogs className="text-purple-600" />
          Why use a hybrid filtering approach?
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Our system uses a hybrid filtering technique that combines:
        </p>
        <ul className="list-disc list-inside text-gray-500 space-y-1 mb-4">
          <li><strong> Content-Based Filtering:</strong> Matching hotels based on features and details similar to your preferences.</li>
          <li><strong> Collaborative Filtering:</strong> Using patterns from similar users to recommend hotels you might like.</li>
        </ul>
        <p className="text-gray-500 text-lg leading-relaxed">
          This approach provides more personalized and accurate recommendations than using either method alone.
        </p>
      </section>
    </div>
  );
};

export default FAQsPage;
