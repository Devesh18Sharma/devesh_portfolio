import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const featured = searchParams.get('featured');
    
    // Query parameters
    const query: any = {};
    
    // Filter by featured if specified
    if (featured === 'true') {
      query.where = { featured: true };
    }
    
    // Get projects from database
    const projects = await prisma.project.findMany({
      ...query,
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
} 