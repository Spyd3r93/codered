import React from 'react';

const NotificationPanels = ({ notifications }) => {
  return (
    <div className="notification-panels">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-panel bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{notification.title}</h2>
          <p className="text-gray-700 mb-2">{notification.message}</p>
          <p className="text-gray-500 text-sm">Severity: {notification.severity}</p>
          <p className="text-gray-500 text-sm">Status: {notification.status}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationPanels;
