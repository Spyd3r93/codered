import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getIncidentAnalytics = async () => {
  const totalIncidents = await prisma.incident.count();
  const resolvedIncidents = await prisma.incident.count({
    where: { status: 'Resolved' },
  });
  const unresolvedIncidents = totalIncidents - resolvedIncidents;
  const criticalIncidents = await prisma.incident.count({
    where: { severity: 'Critical' },
  });

  return {
    totalIncidents,
    resolvedIncidents,
    unresolvedIncidents,
    criticalIncidents,
  };
};

export const getSeverityDistribution = async () => {
  const severityCounts = await prisma.incident.groupBy({
    by: ['severity'],
    _count: {
      severity: true,
    },
  });

  return severityCounts.map((severity) => ({
    severity: severity.severity,
    count: severity._count.severity,
  }));
};

export const getIncidentTrends = async () => {
  const incidentTrends = await prisma.incident.groupBy({
    by: ['createdAt'],
    _count: {
      createdAt: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  return incidentTrends.map((trend) => ({
    date: trend.createdAt,
    count: trend._count.createdAt,
  }));
};
