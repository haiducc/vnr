import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  phone: {
    type: String
  },
  updateDate: {
    type: Date,
    default: Date.now,
  }
});

const EmployeeSchema = mongoose.models.employee || mongoose.model("employee", employeeSchema);

export default EmployeeSchema;
