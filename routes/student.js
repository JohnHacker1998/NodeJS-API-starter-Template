let express = require('express');
let router = express.Router();
let studentController = require('../controllers/studentController');
// let validationMiddleware = require('../middleware/validation-middleware');
// let validationSchema = require('../schema/student');



router.get('/', studentController.getAllStudentsMethod);
router.get('/:id', studentController.getStudentMiddleware, studentController.getOneStudentMethod);
router.post('/', studentController.addStudentMethod);
router.patch('/:id', studentController.updateOneInstance);
router.delete('/:id', studentController.deleteRecord);


module.exports = router;