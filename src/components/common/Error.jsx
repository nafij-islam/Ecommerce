import React from "react";

function ErrorPage({ message, refetch =() =>{ } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full text-center border border-gray-200">
        
        <h1 className="text-2xl font-semibold mb-3">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-6">
          {message}
        </p>

        <button
          onClick={refetch}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}

export default ErrorPage;
