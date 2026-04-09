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
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, phone, fatherName, motherName, school, stream } = req.body;
        
        // Basic validation
        if (!name || !email || !phone || !fatherName || !motherName || !school || !stream) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newStudent = new Student({
            name, email, phone, fatherName, motherName, school, stream
        });

        await newStudent.save();
        res.status(201).json({ message: 'Success! Your inquiry has been submitted.' });
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
