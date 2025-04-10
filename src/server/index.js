const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
      },
    });
    
    res.status(201).json({ 
      message: 'Message sent successfully', 
      submission 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Failed to submit message' });
  }
});

// Projects endpoints
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 