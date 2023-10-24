const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  authId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true, unique: true },
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Student', 'Instructor', 'Admin'], default: 'Student' },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    bio: { type: String },
    avatar: { type: String }, // URL to user's profile picture
  },
  instructorProfile: {
    expertise: { type: String },
    // Add more fields as needed
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
