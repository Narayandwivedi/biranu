const Job = require('../models/Job');
const Application = require('../models/Application');

// Get all jobs for students
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }).populate('postedBy', 'email').sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Apply for a job
exports.applyJob = async (req, res) => {
  try {
    const { studentName, studentEmail, jobId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a resume' });
    }

    const newApplication = new Application({
      job: jobId,
      studentName,
      studentEmail,
      resumeUrl: req.file.path // Storing the local path for now
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully', application: newApplication });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
