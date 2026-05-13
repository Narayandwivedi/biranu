import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Failed to fetch jobs');
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!formData.resume) return alert('Please upload a resume');

    setIsSubmitting(true);
    const data = new FormData();
    data.append('studentName', formData.studentName);
    data.append('studentEmail', formData.studentEmail);
    data.append('resume', formData.resume);
    data.append('jobId', selectedJob._id);

    try {
      await axios.post('http://localhost:5000/api/jobs/apply', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Application submitted successfully!');
      setSelectedJob(null);
      setFormData({ studentName: '', studentEmail: '', resume: null });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Biranu Career Portal</h1>
          <p className="text-gray-600 text-lg">Find your dream job and apply today</p>
        </header>

        <div className="grid gap-6">
          {jobs.map(job => (
            <div key={job._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h2>
                  <p className="text-blue-600 font-semibold mb-2">{job.category} • {job.location}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">{job.salary}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {job.requirements.map((req, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{req}</span>
                ))}
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
          {jobs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500 text-xl">No jobs available at the moment. Check back later!</p>
            </div>
          )}
        </div>

        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
              <h2 className="text-2xl font-bold mb-2">Apply for {selectedJob.title}</h2>
              <p className="text-gray-500 mb-6 text-sm">Please fill in your details and upload your resume (PDF/Word)</p>
              
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.studentEmail}
                    onChange={(e) => setFormData({...formData, studentEmail: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF/DOCX)</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                  />
                </div>
                
                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
