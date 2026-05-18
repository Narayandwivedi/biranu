const Job = require('../models/Job');
const Application = require('../models/Application');
const { sendEmail } = require('../utils/email');

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

    // Fetch the job details for the email
    const jobDetails = await Job.findById(jobId);
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">New Job Application Received</h2>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #333;">Hello,</p>
          <p style="font-size: 16px; color: #333;">A new application has been submitted. Here are the details:</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Applicant Information</h3>
            <p style="margin: 8px 0; color: #475569;"><strong>Name:</strong> ${studentName}</p>
            <p style="margin: 8px 0; color: #475569;"><strong>Email:</strong> ${studentEmail}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Job Details</h3>
            <p style="margin: 8px 0; color: #475569;"><strong>Job Title:</strong> ${jobDetails && jobDetails.title ? jobDetails.title : 'N/A'}</p>
            <p style="margin: 8px 0; color: #475569;"><strong>Job ID:</strong> ${jobId}</p>
          </div>

          <p style="font-size: 16px; color: #333; margin-top: 30px;">The applicant's resume is attached to this email.</p>
        </div>
        <div style="background-color: #f1f5f9; padding: 15px; text-align: center; color: #64748b; font-size: 14px;">
          &copy; ${new Date().getFullYear()} Biranu Consulting. All rights reserved.
        </div>
      </div>
    `;

    // Send the email with the attached resume
    // Since 'to' is not specified, it will use the default addresses set in email.js
    await sendEmail({
      subject: `New Job Application: ${studentName} for ${jobDetails && jobDetails.title ? jobDetails.title : 'a Job'}`,
      html: emailHtml,
      attachments: [
        {
          filename: req.file.originalname || 'resume.pdf',
          path: req.file.path
        }
      ]
    });

    res.status(201).json({ message: 'Application submitted successfully', application: newApplication });
  } catch (err) {
    console.error('Error applying for job:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
