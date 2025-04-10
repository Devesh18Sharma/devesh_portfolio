import { PrismaClient } from '@prisma/client';
import { projects } from '../src/lib/data';
import { localPrisma } from '../src/lib/db';

// Determine if we should use real Prisma or the local file-based DB
const USE_LOCAL_DB = process.env.USE_LOCAL_DB === 'true' || 
                     !process.env.DATABASE_URL || 
                     process.env.DATABASE_URL.includes('devesh_test:devesh_password');

const db = USE_LOCAL_DB ? localPrisma : new PrismaClient();

async function main() {
  console.log('Seeding the database...');
  console.log(`Using ${USE_LOCAL_DB ? 'local file-based database' : 'MongoDB'}`);
  
  // Clear existing data
  await db.project.deleteMany();
  await db.contactSubmission.deleteMany();
  
  // Seed projects
  console.log(`Seeding ${projects.length} projects...`);
  for (const project of projects) {
    await db.project.create({
      data: {
        title: project.title,
        description: project.description,
        techStack: project.techStack,
        imageUrl: project.imageUrl || '/images/projects/placeholder.jpg',
        liveDemo: project.liveDemo,
        githubRepo: project.githubRepo,
        featured: project.featured,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    });
  }
  
  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error while seeding the database:', e);
    process.exit(1);
  })
  .finally(async () => {
    if (!USE_LOCAL_DB) {
      // Only disconnect if using real Prisma
      await (db as PrismaClient).$disconnect();
    }
  }); 