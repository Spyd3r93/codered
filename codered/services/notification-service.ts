import prisma from '../lib/db';

export const getNotifications = async () => {
  try {
    const notifications = await prisma.notification.findMany();
    return notifications;
  } catch (error) {
    throw new Error('Failed to fetch notifications');
  }
};

export const createNotification = async (data) => {
  try {
    const newNotification = await prisma.notification.create({
      data,
    });
    return newNotification;
  } catch (error) {
    throw new Error('Failed to create notification');
  }
};

export const updateNotification = async (id, data) => {
  try {
    const updatedNotification = await prisma.notification.update({
      where: { id },
      data,
    });
    return updatedNotification;
  } catch (error) {
    throw new Error('Failed to update notification');
  }
};

export const deleteNotification = async (id) => {
  try {
    await prisma.notification.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete notification');
  }
};
