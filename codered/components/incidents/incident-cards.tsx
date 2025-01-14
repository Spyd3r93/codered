import React from 'react';

const IncidentCards = ({ incidents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {incidents.map((incident) => (
        <div key={incident.id} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">{incident.title}</h2>
          <p className="text-gray-700 mb-2">{incident.description}</p>
          <p className="text-gray-500 text-sm">Reported by: {incident.reporter}</p>
          <p className="text-gray-500 text-sm">Status: {incident.status}</p>
        </div>
      ))}
    </div>
  );
};

export default IncidentCards;
