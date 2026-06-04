const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    fatherName: { type: String, required: false },
    motherName: { type: String, required: false },
    school: { type: String, required: false },
    currentStream: { type: String, required: false },
    interestStream: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', StudentSchema);
