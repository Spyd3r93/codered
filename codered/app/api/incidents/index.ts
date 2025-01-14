import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const incidents = await prisma.incident.findMany();
        res.status(200).json(incidents);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch incidents' });
      }
      break;
    case 'POST':
      try {
        const { title, description, severity, status } = req.body;
        const newIncident = await prisma.incident.create({
          data: {
            title,
            description,
            severity,
            status,
          },
        });
        res.status(201).json(newIncident);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create incident' });
      }
      break;
    case 'PUT':
      try {
        const { id, title, description, severity, status } = req.body;
        const updatedIncident = await prisma.incident.update({
          where: { id },
          data: {
            title,
            description,
            severity,
            status,
          },
        });
        res.status(200).json(updatedIncident);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update incident' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await prisma.incident.delete({
          where: { id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete incident' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
