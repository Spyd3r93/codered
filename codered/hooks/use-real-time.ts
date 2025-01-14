import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const useRealTime = () => {
  const [realTimeUpdates, setRealTimeUpdates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socket.on('connect', () => {
      console.log('Connected to real-time server');
    });

    socket.on('update', (update) => {
      setRealTimeUpdates((prevUpdates) => [...prevUpdates, update]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from real-time server');
    });

    socket.on('error', (err) => {
      setError(err);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return {
    realTimeUpdates,
    error,
  };
};

export default useRealTime;
