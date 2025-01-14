import React, { useEffect, useState } from 'react';
import { useSettings } from '../../hooks/use-settings';
import { useNotifications } from '../../hooks/use-notifications';
import NotificationPanels from '../../components/alerts/notification-panels';

const Settings = () => {
  const { settings, fetchSettings, updateSettings } = useSettings();
  const { notifications } = useNotifications();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchSettings().finally(() => setLoading(false));
  }, [fetchSettings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <NotificationPanels notifications={notifications} />
      <form onSubmit={handleSubmit}>
        {Object.keys(settings).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
              {key}
            </label>
            <input
              type="text"
              name={key}
              id={key}
              value={formData[key] || settings[key]}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-red-500 text-white hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
