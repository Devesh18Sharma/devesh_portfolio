import { PrismaClient } from '@prisma/client';
import { localPrisma } from './db';

// Determine if we should use real Prisma or the local file-based DB
const USE_LOCAL_DB = process.env.USE_LOCAL_DB === 'true' || !process.env.DATABASE_URL || process.env.DATABASE_URL.includes('devesh_test:devesh_password');

// Avoid multiple instances of Prisma Client in development
declare global {
  var prisma: PrismaClient | typeof localPrisma | undefined;
}

let prismaInstance: PrismaClient | typeof localPrisma;

if (USE_LOCAL_DB) {
  console.log('Using local file-based database');
  prismaInstance = localPrisma;
} else {
  console.log('Using MongoDB database');
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaInstance = global.prisma;
}

export default prismaInstance; 