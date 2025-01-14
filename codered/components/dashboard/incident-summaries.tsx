import React from 'react';

const IncidentSummaries = ({ incidents }) => {
  return (
    <div className="incident-summaries">
      {incidents.map((incident) => (
        <div key={incident.id} className="incident-summary bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{incident.title}</h2>
          <p className="text-gray-700 mb-2">{incident.description}</p>
          <p className="text-gray-500 text-sm">Severity: {incident.severity}</p>
          <p className="text-gray-500 text-sm">Status: {incident.status}</p>
          <p className="text-gray-500 text-sm">Assigned to: {incident.assignedTo}</p>
        </div>
      ))}
    </div>
  );
};

export default IncidentSummaries;
