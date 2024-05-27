import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Dob: {
    type: Date,
    required: true,
  },
  Image: {
    type: String,
  },
  Class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  GrNumber: {
    type: Number,
    required: true,
  },
  RollNo: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  AdmissionDate: {
    type: Date,
    required: true,
  },
  GuardiansEmail: {
    type: String,
    required: true,
  },
  GuardianGender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  GuardianMobile: {
    type: Number,
    required: true,
  },
  Marks: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
