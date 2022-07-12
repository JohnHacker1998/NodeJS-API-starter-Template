let mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 2

    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
    grade: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);