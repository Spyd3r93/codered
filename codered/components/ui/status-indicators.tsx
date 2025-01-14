import React from 'react';

const StatusIndicators = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-200 text-green-800';
      case 'In Progress':
        return 'bg-yellow-200 text-yellow-800';
      case 'Resolved':
        return 'bg-blue-200 text-blue-800';
      case 'Closed':
        return 'bg-gray-200 text-gray-800';
      default:
        return 'bg-red-200 text-red-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default StatusIndicators;
