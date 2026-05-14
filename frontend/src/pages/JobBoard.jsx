import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobBoard = () => {
  const API_URL = import.meta.env.VITE_API_URL;
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
      const res = await axios.get(`${API_URL}/api/jobs`);
      setJobs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Failed to fetch jobs');
      setJobs([]);
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
      await axios.post(`${API_URL}/api/jobs/apply`, data, {
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
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-black text-blue-900 mb-1">Live Jobs</h1>
          <p className="text-gray-500 text-sm">Join our global team of IT professionals</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {(jobs || []).map(job => (
            <div key={job._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-5 sm:p-6 group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  {/* Title & Company */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setSelectedJob(job)}>
                      {job.title}
                    </h2>
                    <p className="text-sm font-semibold text-gray-600 mt-0.5">Biranu Consulting</p>
                  </div>

                  {/* Horizontal Stats/Details */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>0-3 Years</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-1 text-gray-400 uppercase text-[10px]">Salary:</span>
                      <span className="font-medium text-gray-700">{job.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-1 text-gray-400 uppercase text-[10px]">Location:</span>
                      <span className="font-medium text-gray-700">{job.location}</span>
                    </div>
                  </div>

                  {/* Description Snippet */}
                  <div className="flex items-start gap-2 pt-1">
                    <svg className="w-4 h-4 mt-1 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-500 line-clamp-1 italic">
                      <span className="font-bold text-gray-400 not-italic mr-1 uppercase text-[10px]">Description:</span>
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements/Skills */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-bold text-gray-400 uppercase text-[10px] mr-1">Skills:</span>
                    {(job.requirements || []).map((req, i) => (
                      <span key={i} className="text-[12px] text-gray-500 flex items-center after:content-['•'] after:ml-2 last:after:content-none">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="sm:pt-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          {(jobs || []).length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm w-full col-span-full border-2 border-dashed border-gray-100">
              <p className="text-gray-400 text-xl font-medium">No job vacancies currently available.</p>
              <p className="text-gray-400 text-sm mt-2">Please check back later!</p>
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
