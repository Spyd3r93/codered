import prisma from '../lib/db';
import { INCIDENT_STATUS, INCIDENT_SEVERITY } from '../lib/constants';

export const createIncident = async (data) => {
  const { title, description, severity, status, reporter } = data;
  const newIncident = await prisma.incident.create({
    data: {
      title,
      description,
      severity,
      status,
      reporter,
    },
  });
  return newIncident;
};

export const getIncidents = async () => {
  const incidents = await prisma.incident.findMany();
  return incidents;
};

export const getIncidentById = async (id) => {
  const incident = await prisma.incident.findUnique({
    where: { id },
  });
  return incident;
};

export const updateIncident = async (id, data) => {
  const { title, description, severity, status, assignedTo } = data;
  const updatedIncident = await prisma.incident.update({
    where: { id },
    data: {
      title,
      description,
      severity,
      status,
      assignedTo,
    },
  });
  return updatedIncident;
};

export const deleteIncident = async (id) => {
  await prisma.incident.delete({
    where: { id },
  });
};

export const escalateIncident = async (id) => {
  const incident = await prisma.incident.findUnique({
    where: { id },
  });

  if (incident.severity === INCIDENT_SEVERITY.CRITICAL) {
    throw new Error('Incident is already at the highest severity level.');
  }

  const newSeverity = getNextSeverityLevel(incident.severity);
  const escalatedIncident = await prisma.incident.update({
    where: { id },
    data: {
      severity: newSeverity,
    },
  });

  return escalatedIncident;
};

const getNextSeverityLevel = (currentSeverity) => {
  const severityLevels = [
    INCIDENT_SEVERITY.LOW,
    INCIDENT_SEVERITY.MEDIUM,
    INCIDENT_SEVERITY.HIGH,
    INCIDENT_SEVERITY.CRITICAL,
  ];

  const currentIndex = severityLevels.indexOf(currentSeverity);
  if (currentIndex === -1 || currentIndex === severityLevels.length - 1) {
    throw new Error('Invalid severity level.');
  }

  return severityLevels[currentIndex + 1];
};
