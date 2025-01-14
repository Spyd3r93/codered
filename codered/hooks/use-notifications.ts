import { useState, useEffect } from 'react';
import { getNotifications } from '../services/notification-service';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchNotifications();
  }, []);

  return {
    notifications,
    error,
  };
};

export default useNotifications;
