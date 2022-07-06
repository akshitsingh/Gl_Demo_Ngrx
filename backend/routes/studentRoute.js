const express = require('express');
const { addStudent, getAllStudents, getStudentDetails, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/student/add', addStudent);  //add new student

router.get('/students', getAllStudents);  //get all students

router.get('/students/:id', getStudentDetails);  //get student detail

router.put('/student/:id', updateStudent);

router.delete('/student/:id', deleteStudent );

module.exports = router;

