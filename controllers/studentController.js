const { resolveSchema } = require("ajv/dist/compile");
const { json } = require("body-parser");
let mongoose = require("mongoose");
let Student = require('../models/student');
const addStudent = async(req, res) => {
    const student = new Student(req.body);
    try {
        const newStudent = await student.save();
        res.status(200).json(newStudent);
    } catch (err) {
        res.status(400).json({
            "message": "Data not saved successfully",
            "error": err.message
        })
    }
}
const getAllStudents = async(req, res) => {
    try {
        const studentList = await Student.find();
        res.status(200).json(studentList)
    } catch (err) {
        res.status(500).json({
            "status": 0,
            "message": err.message
        })
    }
}
const getStudent = async(req, res, next) => {
    let student;
    try {
        const id = req.params.id;
        student = await Student.findById(id);
        if (student == null) {
            return res.status(400).json({
                "message": "Student not found"
            })
        }

    } catch (err) {

        return res.status(400).json({
            "message": err.message
        })
    }

    res.student = student;
    next();

}
const getOneStudent = async(req, res) => {
    res.status(500).json(res.student);
}
const updateData = async(req, res) => {
    try {
        // res.student = req.body;
        //console.log(res.student)

        //  console.log(student)
        const newStudent = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            "message": "Data updated successfully"
        })
    } catch (err) {
        res.status(500).json({
            "status": 0,
            "message": err.message
        })
    }

}
const deleteData = async(req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndRemove(id);
        res.status(200).json({
            "message": "student deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            "status": 0,
            "message": err.message
        })
    }
}
module.exports = {
    addStudentMethod: addStudent,
    getAllStudentsMethod: getAllStudents,
    getOneStudentMethod: getOneStudent,
    updateOneInstance: updateData,
    getStudentMiddleware: getStudent,
    deleteRecord: deleteData
}