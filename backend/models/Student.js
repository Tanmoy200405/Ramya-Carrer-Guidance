const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: false },
    school: { type: String, required: true },
    currentStream: { type: String, required: true },
    interestStream: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', StudentSchema);
