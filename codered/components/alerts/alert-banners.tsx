import React from 'react';

const AlertBanners = ({ notifications }) => {
  return (
    <div className="alert-banners">
      {notifications.map((notification) => (
        <div key={notification.id} className="alert bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">{notification.title}</strong>
          <span className="block sm:inline">{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

export default AlertBanners;
