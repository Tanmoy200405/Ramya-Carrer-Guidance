require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true
}));
app.options(/.*/, cors()); // Enable pre-flight for all routes
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Health Check
app.get('/', (req, res) => {
    res.send('🚀 Career Guidance API is running...');
});

// Routes
app.post('/api/students', async (req, res) => {
    console.log('Received inquiry request:', req.body);
    try {
        const { name, email, phone, fatherName, motherName, school, currentStream, interestStream } = req.body;

        // Basic validation (All except motherName are required)
        if (!name || !email || !phone || !fatherName || !school || !currentStream || !interestStream) {
            return res.status(400).json({ message: 'All fields marked with * are required' });
        }

        const newStudent = new Student({
            name, email, phone, fatherName, motherName, school, currentStream, interestStream
        });

        await newStudent.save();
        console.log('✅ Student inquiry saved to Atlas (ramya_db):', newStudent.name);
        res.status(201).json({ message: 'Success! Your inquiry has been submitted.' });
    } catch (error) {
        console.error('❌ Error saving student to MongoDB:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
