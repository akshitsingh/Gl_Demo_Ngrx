
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const Student = require('../models/student.model')

 const addStudent = catchAsyncErrors(
    async(req,res )=>{
        const {name,phone,email,password,city,address} = req.body;
    
         let user = new Student({
              name,
              phone,
              email,
              password,
              address,
              city
          })
    
        let data = await user.save();
        if(!data){
            return res.status('500').json({success:false,message : 'something went wrong'})
        }
    
        return res.status(200).json({success:true,message : 'student added successfully'})
    
    }   
) 

//Get all products
 const getAllStudents = catchAsyncErrors(async (req, res) => {

    const user = await Student.find();
    if(!user){
        return new ErrorHandler('This user not found','404')
    }
    res.status(200).json({
      success: true,
      data : user
    });
  });

  //Update student detail
  const updateStudent = catchAsyncErrors(async (req, res, next) => {
    let user = Student.findById(req.params.id);
  
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "Student not found",
      });
    }
  
    user = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      data : user,
    });
  });
  
  const deleteStudent = catchAsyncErrors(async (req, res, next) => {
    let student = await Student.findById(req.params.id);
  
    if (!student) {
      return res.status(500).json({
        success: true,
        message: "Student not found",
      });
    }
  
    await student.remove();
  
    res.status(200).json({
      success: true,
      message: "Student Delete successfully",
    });
  });
  
  
  //Get product details
  const getStudentDetails = catchAsyncErrors(async (req, res, next) => {
    let student = await Student.findById(req.params.id);
  
    if (!student) {
      return next(new ErrorHandler("Student not found", 404));
    }
  
    res.status(200).json({
      success: true,
      data : student,
    });
  });
  
  



module.exports = {addStudent,getAllStudents, updateStudent, deleteStudent, getStudentDetails}

