import React, { useEffect } from 'react';
import { useIncidents } from '../../hooks/use-incidents';
import { useRealTime } from '../../hooks/use-real-time';
import IncidentCards from '../../components/incidents/incident-cards';
import SeverityBadges from '../../components/incidents/severity-badges';
import TimelineView from '../../components/incidents/timeline-view';
import ResponderLists from '../../components/incidents/responder-lists';

const IncidentManagement = () => {
  const { incidents, fetchIncidents } = useIncidents();
  const { realTimeUpdates } = useRealTime();

  useEffect(() => {
    fetchIncidents();
  }, [fetchIncidents]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Incident Management</h1>
      <SeverityBadges incidents={incidents} />
      <TimelineView incidents={incidents} />
      <IncidentCards incidents={incidents} />
      <ResponderLists incidents={incidents} />
    </div>
  );
};

export default IncidentManagement;
