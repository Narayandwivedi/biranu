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
          <h1 className="text-2xl font-black text-blue-900 mb-1">Biranu Careers</h1>
          <p className="text-gray-500 text-sm">Join our global team of IT professionals</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(jobs || []).map(job => (
            <div key={job._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-blue-600 text-[10px] font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">{job.category}</span>
                      <span className="text-gray-400 text-[10px] flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Description</h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{job.description}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Salary Package</h4>
                    <p className="text-sm font-bold text-gray-900">{job.salary}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Key Requirements</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(job.requirements || []).slice(0, 4).map((req, i) => (
                        <span key={i} className="bg-gray-50 text-gray-600 text-[10px] px-2.5 py-1 rounded-lg border border-gray-100 font-medium">{req}</span>
                      ))}
                      {(job.requirements || []).length > 4 && (
                        <span className="text-[10px] text-gray-400 font-medium px-1">
                          +{(job.requirements || []).length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                >
                  Apply Now
                </button>
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
