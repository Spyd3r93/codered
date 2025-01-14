import React from 'react';

const ResponderLists = ({ responders }) => {
  return (
    <div className="responder-lists">
      {responders.map((responder) => (
        <div key={responder.id} className="responder-card bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{responder.name}</h2>
          <p className="text-gray-700 mb-2">Role: {responder.role}</p>
          <p className="text-gray-500 text-sm">Contact: {responder.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponderLists;
