import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const alerts = await prisma.alert.findMany();
        res.status(200).json(alerts);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch alerts' });
      }
      break;
    case 'POST':
      try {
        const { title, description, severity, status } = req.body;
        const newAlert = await prisma.alert.create({
          data: {
            title,
            description,
            severity,
            status,
          },
        });
        res.status(201).json(newAlert);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create alert' });
      }
      break;
    case 'PUT':
      try {
        const { id, title, description, severity, status } = req.body;
        const updatedAlert = await prisma.alert.update({
          where: { id },
          data: {
            title,
            description,
            severity,
            status,
          },
        });
        res.status(200).json(updatedAlert);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update alert' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await prisma.alert.delete({
          where: { id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete alert' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
