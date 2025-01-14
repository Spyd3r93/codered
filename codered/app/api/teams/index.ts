import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const teams = await prisma.team.findMany();
        res.status(200).json(teams);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch teams' });
      }
      break;
    case 'POST':
      try {
        const { name, description } = req.body;
        const newTeam = await prisma.team.create({
          data: {
            name,
            description,
          },
        });
        res.status(201).json(newTeam);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create team' });
      }
      break;
    case 'PUT':
      try {
        const { id, name, description } = req.body;
        const updatedTeam = await prisma.team.update({
          where: { id },
          data: {
            name,
            description,
          },
        });
        res.status(200).json(updatedTeam);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update team' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await prisma.team.delete({
          where: { id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete team' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
