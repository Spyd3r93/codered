import React from 'react';

const SeverityBadges = ({ incidents }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Low':
        return 'bg-green-200 text-green-800';
      case 'Medium':
        return 'bg-yellow-200 text-yellow-800';
      case 'High':
        return 'bg-orange-200 text-orange-800';
      case 'Critical':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {incidents.map((incident) => (
        <span
          key={incident.id}
          className={`px-2 py-1 rounded-full text-sm font-semibold ${getSeverityColor(incident.severity)}`}
        >
          {incident.severity}
        </span>
      ))}
    </div>
  );
};

export default SeverityBadges;
