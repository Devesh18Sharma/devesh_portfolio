import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { validateEmail } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    
    // Create contact submission in database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message
      }
    });
    
    return NextResponse.json({ 
      message: 'Message sent successfully',
      submission
    }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
  }
} 