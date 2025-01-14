import React from 'react';
import { useIncidents } from '../hooks/use-incidents';
import { useRealTime } from '../hooks/use-real-time';
import { useNotifications } from '../hooks/use-notifications';
import IncidentCards from '../components/incidents/incident-cards';
import StatisticsCards from '../components/dashboard/statistics-cards';
import IncidentSummaries from '../components/dashboard/incident-summaries';
import AlertBanners from '../components/alerts/alert-banners';
import NotificationPanels from '../components/alerts/notification-panels';

const Dashboard = () => {
  const { incidents, fetchIncidents } = useIncidents();
  const { realTimeUpdates } = useRealTime();
  const { notifications } = useNotifications();

  React.useEffect(() => {
    fetchIncidents();
  }, [fetchIncidents]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <AlertBanners notifications={notifications} />
      <StatisticsCards incidents={incidents} />
      <IncidentSummaries incidents={incidents} />
      <IncidentCards incidents={incidents} />
      <NotificationPanels notifications={notifications} />
    </div>
  );
};

export default Dashboard;
