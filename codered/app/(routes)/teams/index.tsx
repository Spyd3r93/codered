import React, { useEffect, useState } from 'react';
import { useTeams } from '../../hooks/use-teams';
import TeamCard from '../../components/teams/team-card';
import { useNotifications } from '../../hooks/use-notifications';
import NotificationPanels from '../../components/alerts/notification-panels';

const TeamManagement = () => {
  const { teams, fetchTeams } = useTeams();
  const { notifications } = useNotifications();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams().finally(() => setLoading(false));
  }, [fetchTeams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team Management</h1>
      <NotificationPanels notifications={notifications} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
