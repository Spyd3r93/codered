import { useState, useEffect } from 'react';
import axios from 'axios';

const useIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIncidents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/incidents');
      setIncidents(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createIncident = async (incident) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/incidents', incident);
      setIncidents([...incidents, response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateIncident = async (id, updatedIncident) => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/incidents/${id}`, updatedIncident);
      setIncidents(incidents.map((incident) => (incident.id === id ? response.data : incident)));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteIncident = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/incidents/${id}`);
      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return {
    incidents,
    loading,
    error,
    fetchIncidents,
    createIncident,
    updateIncident,
    deleteIncident,
  };
};

export default useIncidents;
