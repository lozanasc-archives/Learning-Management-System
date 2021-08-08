const express = require('express');
const router = express.Router();

// * Basic Backend Services:
const Enroll = require('../services/student/student.add');
const Edit = require('../services/student/student.modify');
const Drop = require('../services/student/student.delete');
const View = require('../services/student/student.view');
const Authenticate = require('../services/student/student.auth');

router.post('/enroll', async(req,res) => {
    const { Name, 
            Password, 
            FullName, 
            Address, 
            Course
        } = req.body;
    const AddingStudentData = await Enroll(Name, Password, FullName, Address, Course);
    if(AddingStudentData){
        res.status(200)
        .send(
            {
                'enrollment_status': AddingStudentData,
                'enrollment_description': 'Enrolling of Student Information is Successful!'
            }
        );
    }
    else{
        res.status(500)
        .send(
            {
                'enrollment_status': AddingStudentData,
                'enrollment_description': 'Enrolling of Student Information is Unsuccessful!'
            }
        );
    }
});

router.get('/view', async(req,res) => {
    const ViewAll = await View();
    if(ViewAll){
        res.status(200)
        .send(
            ViewAll
        )
    }
    else{
        res.status(500)
        .send({
            "view_status": false,
            "view_description": "Student Data Fetch is Unsuccessful!"
        })
    }
});

router.post('/auth', async(req,res) => {
    const {User} = req.body;
    const StudentData = await Authenticate(User);
    if(StudentData){
        res.status(200).send(  
            StudentData
        )
    }
    else {
        res.status(500)
        .send(
            {
                "auth_status": false,
                "auth_description": "Username does not exist!"
            }
        )
    }
})

module.exports = router;

