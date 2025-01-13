import React from 'react';

const StatisticsCards = ({ incidents }) => {
  const totalIncidents = incidents.length;
  const resolvedIncidents = incidents.filter(incident => incident.status === 'Resolved').length;
  const unresolvedIncidents = totalIncidents - resolvedIncidents;
  const criticalIncidents = incidents.filter(incident => incident.severity === 'Critical').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Total Incidents</h2>
        <p className="text-2xl">{totalIncidents}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Resolved Incidents</h2>
        <p className="text-2xl">{resolvedIncidents}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Unresolved Incidents</h2>
        <p className="text-2xl">{unresolvedIncidents}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Critical Incidents</h2>
        <p className="text-2xl">{criticalIncidents}</p>
      </div>
    </div>
  );
};

export default StatisticsCards;
