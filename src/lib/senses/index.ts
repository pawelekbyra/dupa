import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function logAction(
  level: 'INFO' | 'WARN' | 'ERROR',
  message: string,
  context?: any
) {
  try {
    await prisma.systemLog.create({
      data: {
        level,
        message,
        context: context ? JSON.parse(JSON.stringify(context)) : undefined,
      },
    });
  } catch (error) {
    console.error("Senses Error (Logging failed):", error);
  }
}

// Ensure prisma is disconnected properly on app termination could be handled here
// but Next.js usually handles this via singletons in dev.
