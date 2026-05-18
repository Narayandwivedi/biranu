const Admin = require('../models/Admin');
const Job = require('../models/Job');
const Application = require('../models/Application');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1d' }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { title, description, category, salary, location, requirements, experience } = req.body;
    
    const newJob = new Job({
      title,
      description,
      category,
      salary,
      location,
      requirements: requirements ? requirements.split(',').map(req => req.trim()) : [],
      experience,
      postedBy: req.admin.id
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all jobs posted by the admin
exports.getAdminJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a single job with applications
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    const applications = await Application.find({ job: job._id }).sort({ createdAt: -1 });
    res.json({ job, applications });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update Job (including status)
exports.updateJob = async (req, res) => {
  try {
    const { title, description, category, salary, location, requirements, isActive, experience } = req.body;
    
    let job = await Job.findOne({ _id: req.params.id });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    job.title = title || job.title;
    job.description = description || job.description;
    job.category = category || job.category;
    job.salary = salary || job.salary;
    job.location = location || job.location;
    job.experience = experience !== undefined ? experience : job.experience;
    if (requirements !== undefined) {
      job.requirements = typeof requirements === 'string' ? requirements.split(',').map(req => req.trim()) : requirements;
    }
    if (isActive !== undefined) {
      job.isActive = isActive;
    }

    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    // Also delete applications for this job
    await Application.deleteMany({ job: job._id });
    res.json({ message: 'Job and related applications deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get applications for a specific job
exports.getJobApplications = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId }).populate('job').sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Seed admin (Helper for initial setup)
exports.seedAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: 'admin@biranu.com' });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const newAdmin = new Admin({
      email: 'admin@biranu.com',
      password: hashedPassword
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully', email: 'admin@biranu.com', password: 'admin123' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Change Password
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Check if admin exists
    const admin = await Admin.findById(req.admin.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect old password' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    admin.password = hashedPassword;
    await admin.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
